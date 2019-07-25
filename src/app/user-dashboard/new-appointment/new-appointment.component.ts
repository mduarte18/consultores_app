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

  constructor(private globalService:GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService,private modal:NgbModal) { }

  ngOnInit() {
    this.loader.show();
    this.globalService.getAllConsultants({type:this.type}).subscribe(
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
    this.globalService.getAllConsultants({type:type}).subscribe(
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

}
