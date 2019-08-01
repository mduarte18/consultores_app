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

  public tempDating = {} as Dating;

  public solname: string;
  public solape: string;


  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {

    this.loader.show();
    globalService.getDatingsForConsultant(this.user.id).subscribe(
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
  }

  ngOnInit() {
  }


  open(content, event) {
    this.tempDating.user_id = event.srcElement.dataset.userid;
    this.tempDating.consultant_id = this.user.id;
    this.tempDating.title = event.srcElement.dataset.title;
    this.tempDating.summary = event.srcElement.dataset.summary;
    this.tempDating.for_date = event.srcElement.dataset.for_date;
    this.tempDating.time_from = event.srcElement.dataset.time_from;
    this.tempDating.time_up = event.srcElement.dataset.time_up;
    this.tempDating.price = event.srcElement.dataset.price;
    this.tempDating.id = event.srcElement.dataset.datingid;


    this.solape = event.srcElement.dataset.solape;
    this.solname = event.srcElement.dataset.solname;
    this.modal.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);

    });

  }

  close() {
    this.modal.dismissAll();
    this.tempDating = {} as Dating;
    this.solape = ''
    this.solname = ''
  }

  responseRequest(response: string) {
    this.loader.show();
    this.tempDating.dating_status = response;

    if ('Rechazada' === response) {
      this.tempDating.price = 0;
    }

    this.globalService.responseRequest(this.tempDating).subscribe(
      result => { console.log(result)
        if('ok'===result){
          this.toaster.success('Operación exitosa.');
          this.close();
          this.loader.hide();
        }else{
          this.toaster.error('Operación fallida.');
          this.close();
          this.loader.hide();
        }
      },
      error => { console.error(error)
        this.toaster.error(error.message,'Error:');
        this.close();
        this.loader.hide();
      });
  }

}
