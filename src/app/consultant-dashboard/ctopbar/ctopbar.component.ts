import { GLOBAL } from './../../global/GLOBAL';
import { Consultant } from './../../interfaces/Consultant';
import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-ctopbar',
  templateUrl: './ctopbar.component.html',
  styleUrls: ['./ctopbar.component.css']
})
export class CtopbarComponent implements OnInit {

  user : Consultant;
  reportTitle: string ='';
  reportMessage: string='';

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {
    this.user=JSON.parse(localStorage.getItem('user_data'));
  }

  ngOnInit() {
  }

  openModal(content){
    this.modal.open(content);
  }

  createReport(){
    this.loader.show();
    this.globalService.createReportForBug({consultant_id:this.user.id, report_title:this.reportTitle,report_message:this.reportMessage })
    .subscribe(
      result => {
        if('success'===result){
          this.toaster.success('Reporte Enviado.');
          this.modal.dismissAll();
        }else{
          this.toaster.error('Error en el Envio.');
        }
        console.log(result);
        this.loader.hide();
      },
      error => {
        console.log(error);
        this.loader.hide();
      }
    );
  }

  logOut(): void {
    localStorage.clear();
    GLOBAL.redirectTo('/home');
  }

}
