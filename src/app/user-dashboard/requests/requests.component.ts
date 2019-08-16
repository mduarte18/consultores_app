import { Dating } from './../../interfaces/Dating';
import { User } from './../../interfaces/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public user: User = JSON.parse(localStorage.getItem('user_data'));
  datings$: any;
  dating :any;

  constructor(private globalService:GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {
     this.getDatings(this.user.id);
    }

  ngOnInit() {
  }

  getDatings(id):void{
    this.loader.show();
    this.globalService.getDatingsByUser(id).subscribe(
      result=>{
        this.datings$=result;
        this.loader.hide();
      },
      error=>{
        console.log(error);
        this.loader.hide();
        this.toaster.error(error.message,'Error:');
      }
    );
  }

  open(content: any, dating) {
    this.dating=dating;
    this.modal.open(content);

  }

  close(){
    this.modal.dismissAll()
  }

  cancelledDating(){
    this.loader.show();
    this.modal.dismissAll();
    this.globalService.cancelDating(this.dating.id).subscribe(
      response=>{
        if('ok'===response){
          this.getDatings(this.user.id);
          this.loader.hide();
          this.toaster.success('Solicitud de asesoria cancelada.','Exitoso');
        }else{
          this.loader.hide();
          this.toaster.error('No se ha podido cancelar.','Error:');
        }
      },
      error=>{
        this.loader.hide();
        this.toaster.error('Ha ocurrido un error.','Error:');
        console.error(error);
      }
    )
  }
  finishedDating(){
    this.loader.show();
    this.modal.dismissAll();
    this.globalService.finishDating(this.dating.id).subscribe(
      response=>{
        if('ok'===response){
          this.getDatings(this.user.id);
          this.loader.hide();
          this.toaster.success('Solicitud de asesoria Finalizada.','Exitoso');
        }else{
          this.loader.hide();
          this.toaster.error('No se ha podido finalizar.','Error:');
        }
      },
      error=>{
        this.loader.hide();
        this.toaster.error('Ha ocurrido un error.','Error:');
        console.error(error);
      }
    )
  }

}
