import { GLOBAL } from './../../global/GLOBAL';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Dating } from './../../interfaces/Dating';
import { Consultant } from './../../interfaces/Consultant';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public user: Consultant = JSON.parse(localStorage.getItem('user_data'));

  public datings: Dating[];

  public finishedDatings: Dating[];

  public tempDating = {} as Dating;

  public finishedDating = {} as Dating;

  public solname: string;
  public solape: string;

  public reportMessage: string;

  public urls: any[];

  public publicUrl = GLOBAL.uploadsUrl;


  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {

    this.loader.show();
    globalService.getDatingsForConsultant(this.user.id, 'Solicitado').subscribe(
      result => {
        console.log(result);
        this.datings = result;
        this.loader.hide();
        console.log(this.datings);
      },
      error => {
        console.log(error);
        this.loader.hide();
      }
    );

    globalService.getDatingsForConsultant(this.user.id, 'Finalizada').subscribe(
      result => {
        console.log(result);
        this.finishedDatings = result;
        this.loader.hide();
        console.log(this.finishedDatings);
      },
      error => {
        console.log(error);
        this.loader.hide();
      }
    );
  }

  ngOnInit() {
  }


  open(content, dating, consult?: boolean) {

    this.solape = dating.solape;
    this.solname = dating.solname;

    this.tempDating = dating;

    if (consult && ('Solicitado' === dating.dating_status ||
      'Aprobada' === dating.dating_status)) {
      this.globalService.getAllAttached(this.tempDating.id).subscribe(
        result => {
          this.urls = result;
          console.log(this.urls);
        },
        error => {
          console.error(error);
        }
      );
    }

    this.modal.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);

    });

  }

  openToReport(content, dating) {

    this.solape = dating.solape;
    this.solname = dating.solname;

    this.finishedDating = dating;

    this.modal.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);

    });

  }

  open_url(content) {
    this.modal.open(content);
  }

  close() {
    this.modal.dismissAll();
    this.tempDating = {} as Dating;
    this.finishedDating = {} as Dating;
    this.solape = ''
    this.solname = ''
    this.reportMessage=''
  }

  responseRequest(response: string) {
    this.loader.show();
    this.tempDating.dating_status = response;

    if ('Rechazada' === response) {
      this.tempDating.price = 0;
    }

    this.globalService.responseRequest(this.tempDating).subscribe(
      result => {
        console.log(result)
        if ('ok' === result) {
          this.toaster.success('Operación exitosa.');
          this.close();
          this.loader.hide();
        } else {
          this.toaster.error('Operación fallida.');
          this.close();
          this.loader.hide();
        }
      },
      error => {
        console.error(error)
        this.toaster.error(error.message, 'Error:');
        this.close();
        this.loader.hide();
      });
  }
  createReport(){
    this.loader.show()
    this.globalService.createReportForDating({report_title:'Reporte Asesoria #'+this.finishedDating.id,report_message:this.reportMessage,dating_id:this.finishedDating.id}).subscribe(
      result => {
        console.log(result);
        if('success'===result){
          this.toaster.success('Operación exitosa.');
          this.close();
        }else{
        this.toaster.error('Ha ocurrido un error.', 'Error:');
        }
        this.loader.hide();
      },
      error => {
        this.toaster.error(error.message, 'Error:');
        console.log(error);
        this.loader.hide();
      }
    );
  }

}
