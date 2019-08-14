import { GLOBAL } from './../../global/GLOBAL';
import { Dating } from './../../interfaces/Dating';
import { User } from './../../interfaces/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from 'src/app/services/global.service';
import { Consultant } from './../../interfaces/Consultant';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  consultants: Consultant[];
  type: string='ALL';
  user: User = JSON.parse(localStorage.getItem('user_data'));
  dating = {} as Dating;
  consultant = {} as Consultant;

  time: number = 0;
  price_per_hour = GLOBAL.getParameter('Salario_Asesores');



  constructor(private globalService:GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService,private modal:NgbModal) { }

  ngOnInit() {
    this.loader.show();
    this.globalService.getAllActivateConsultants({type:this.type}).subscribe(
      result =>{
        this.consultants=result;
        this.loader.hide()
      },
      error=>{
        this.toaster.error(error.message, 'Error:')
        this.loader.hide()
      }
    );
  }

  getConsultants(type){
    console.log(type);
    this.loader.show();
    this.globalService.getAllActivateConsultants({type:type}).subscribe(
      result =>{
        console.log(result);
        this.consultants=result;
        this.loader.hide();
      },
      error=>{
        this.toaster.error(error.message, 'Error:')
        console.log(error);
        this.loader.hide();
      }
    )
  }

  sendRequest(){
    this.loader.show();
    this.dating.dating_status='Solicitado';
    this.dating.user_id=this.user.id;
    this.globalService.new_dating(this.dating).subscribe(
      result => {
        if('ok'===result){
          this.loader.hide();
          this.toaster.success('Solicitud Enviada.');
          this.dating = {} as Dating;
        }else{
          this.loader.hide();
          // this.dating = {} as Dating;
          // this.consultant = {} as Consultant;
          // this.modal.dismissAll();
          this.toaster.error(result,'Error:');
        }
        console.log(result)
      },
      error => {
        this.loader.hide();
        this.toaster.error(error.message, 'Error: ');
        console.log(error);
      }
    );
  }

  // setPriceForDating() {

  //   if(this.dating.for_date && this.dating.time_from && this.dating.time_up){
  //     var date1 = new Date(this.dating.for_date+' '+this.dating.time_from).getTime();
  //     var date2 = new Date(this.dating.for_date+' '+this.dating.time_up).getTime();
  //     var msec = date2 - date1;
  //     this.dating.price=(msec/60000/60)*parseInt(this.consultant.price_per_hour);
  //   }else{
  //      return;
  //   }

  // }
  setPriceForDating() {

    if(this.dating.for_date && this.dating.time_from && this.price_per_hour && this.time){
      var temp = new Date(this.dating.for_date+' '+this.dating.time_from);
      temp.setHours(temp.getHours()+this.time);
      var msec = temp.getHours()+':'+GLOBAL.zeroPad(temp.getMinutes(),2);
      this.dating.time_up=msec;
      this.dating.price=parseInt(this.price_per_hour)*this.time;
    }else{
       return;
    }


  }

  setConsultant(event){
   this.consultant= this.consultants.find(consul => consul.id === this.dating.consultant_id);
  }

}
