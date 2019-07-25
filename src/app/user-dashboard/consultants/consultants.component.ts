import { Dating } from './../../interfaces/Dating';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Consultant } from './../../interfaces/Consultant';
import { GlobalService } from 'src/app/services/global.service';
import { User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})
export class ConsultantsComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem('user_data'));
  consultants: Consultant[];
  type: string='ALL';
  dating = {} as Dating;

  constructor(private globalService:GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService,private modal:NgbModal) {
      console.log('Asesores.');


    }

  ngOnInit() {
    this.loader.show();
    this.globalService.getAllConsultants({type:this.type}).subscribe(
      result =>{
        console.log(result);
        this.consultants=result;
        this.loader.hide()
      },
      error=>{
        this.toaster.error(error.message, 'Error:')

        console.log(error);
        this.loader.hide()
      }
    );
  }

  getConsultantByType(type:string){
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

  open(content,event) {

    this.dating.consultant_id=event.srcElement.dataset.consultantid;
    this.dating.user_id=this.user.id;

    this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);

    });

  }

  sendRequest(){
    console.log(this.dating);
    this.loader.show()
    this.globalService.new_dating(this.dating).subscribe(
      result => {
        if('ok'===result){
          this.loader.hide();
          this.toaster.success('Solicitud Enviada.');
        }
        console.log(result)
      },
      error => {
        this.loader.hide();
        this.toaster.error(error.message, 'Error: ');
        console.log(error);
      }
    );

    this.dating = {} as Dating;
    this.modal.dismissAll();
  }

}
