import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from './../../services/global.service';
import { Consultant } from './../../interfaces/Consultant';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-approve-consultant',
  templateUrl: './approve-consultant.component.html',
  styleUrls: ['./approve-consultant.component.css']
})
export class ApproveConsultantComponent implements OnInit {

  consultants: any[];

  Consultant = {} as Consultant;

  action: string = '';

  value: string = '';

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) { }

  ngOnInit() {
    this.getConsultants();
  }

  close() {
    this.action = '';
    this.Consultant = {} as Consultant;
    this.value = '';
    this.modal.dismissAll();
  }

  confirmAction() {
    this.loader.show();
    this.modal.dismissAll();
    this.globalService.activateOrDesactivateConsultants({ action_to: this.action, value: this.value, consultant_id: this.Consultant.id })
      .subscribe(
        result => {
          if ('ok' === result) {
            this.getConsultants();
            this.loader.hide();
            this.toaster.success('Acción procesada.');
          } else {
            this.loader.hide();
            this.getConsultants();
            this.toaster.error('No se ha activado al Asesor.');
          }
        },
        error => { this.toaster.error(error.message, 'Error:'); }
      );

  }

  openAction(modal, action, consultant, param) {
    this.action = action;
    this.value = param;
    this.Consultant = consultant;

    this.modal.open(modal);
  }

  getConsultants() {
    this.loader.show();

    this.globalService.getAllConsultants({ type: 'ALL' }).subscribe(
      result => {
        this.consultants = result;
        this.loader.hide();
        console.log(this.consultants);
      },
      error => {
        console.log(error);
        this.toaster.error(error.message, 'Error:');
        this.loader.hide();
      }
    );
  }

  open(content: any, consultant: any) {

    this.Consultant=consultant;

    this.modal.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);

    });

  }

}
