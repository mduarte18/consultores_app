import { TimeFormat } from './../../global/convertFrom24To12Format';
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
  consultant = {} as Consultant;
  time: string = '';

  consultants: Consultant[];
  type: string = 'ALL';
  dating = {} as Dating;

  formatTime: number = 0;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {
    console.log('Asesores.');

  }

  ngOnInit() {
    this.loader.show();
    this.globalService.getAllConsultants({ type: this.type }).subscribe(
      result => {
        this.consultants = result;
        this.loader.hide()
      },
      error => {
        this.toaster.error(error.message, 'Error:')

        console.log(error);
        this.loader.hide()
      }
    );
  }

  getConsultantByType(type: string) {
    this.loader.show();
    this.globalService.getAllConsultants({ type: type, time: this.time }).subscribe(
      result => {
        this.consultants = result;
        this.loader.hide();
      },
      error => {
        this.toaster.error(error.message, 'Error:')
        console.log(error);
        this.loader.hide();
      }
    )
  }

  open(content: any, consultant: any) {

    this.consultant=consultant;
    this.dating.consultant_id = consultant.id;
    this.dating.user_id = this.user.id;

    this.modal.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);

    });

  }

  sendRequest() {
    console.log(this.dating);
    this.dating.dating_status = 'Solicitado';
    if (this.validate()) {
      this.loader.show()
      this.globalService.new_dating(this.dating).subscribe(
        result => {
          if ('ok' === result) {
            this.loader.hide();
            this.dating = {} as Dating;
            this.consultant = {} as Consultant;
            this.modal.dismissAll();
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
    }
  }

  validate(): boolean {
    let pass = true;

    if (!this.dating.title) {
      this.toaster.error('El campo de Titulo es Requerido', 'Error:');
      pass = false;
    }
    if (!this.dating.summary) {
      this.toaster.error('El campo de Descripción es Requerido', 'Error:');
      pass = false;
    }
    if (!this.dating.price) {
      this.toaster.error('El campo de Presupuesto es Requerido', 'Error:');
      pass = false;
    }
    if (!this.dating.for_date) {
      this.toaster.error('El campo de Fecha es Requerido', 'Error:');
      pass = false;
    }
    if (!this.dating.time_from) {
      this.toaster.error('El campo de Hora inicial es Requerido', 'Error:');
      pass = false;
    }
    if (!this.dating.time_up) {
      this.toaster.error('El campo de Hora de cierre es Requerido', 'Error:');
      pass = false;
    }
    if (!this.dating.title) {
      this.toaster.error('El campo de Titulo es Requerido', 'Error:');
      pass = false;
    }

    return pass;
  }

  show_consultant(consultant: any, modal: any) {
    this.consultant = consultant;
    this.modal.open(modal);
  }

  close(modal: any) {
    this.modal.dismissAll()
  }

  setPriceForDating() {

    if(this.dating.for_date && this.dating.time_from && this.dating.time_up){
      var date1 = new Date(this.dating.for_date+' '+this.dating.time_from).getTime();
      var date2 = new Date(this.dating.for_date+' '+this.dating.time_up).getTime();
      var msec = date2 - date1;
      this.dating.price=(msec/60000/60)*parseInt(this.consultant.price_per_hour);
    }else{
       return;
    }


  }


}

