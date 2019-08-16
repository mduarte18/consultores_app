import { GLOBAL } from './../../global/GLOBAL';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from './../../services/global.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-approve-balance-consultant',
  templateUrl: './approve-balance-consultant.component.html',
  styleUrls: ['./approve-balance-consultant.component.css']
})
export class ApproveBalanceConsultantComponent implements OnInit {

  uploadForm: FormGroup;
  balanceUser: string = "0";
  depositAmount: number = 0;
  formData = new FormData();

  uploads: string = GLOBAL.uploadsUrl;

  payments: any[];
  retirments: any[];

  retirment: any;

  retirement_id: string = '';

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,
    private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService) {

    this.getRetirements();

  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      file: new FormControl(),
      referenceno: new FormControl(),
      id: new FormControl()
    });
  }

  sendRetirement() {
    this.loader.show();
    console.log('enviado');
    // this.formData.append('file', this.uploadForm.get('deposit').value);
    this.formData.append('referenceno', this.uploadForm.get('referenceno').value);
    this.formData.append('id', this.retirment.id.toString());

    console.log(this.formData);
    if (this.uploadForm.get('file').value) {
      this.globalService.uploadRetirement(this.formData).subscribe(
        result => {
          console.log(result);
          this.loader.hide();
          this.toaster.success('Se ha realizado el pago');
          this.getRetirements();
          this.modalService.dismissAll();
        },
        error => {
          console.log(error);
          this.loader.hide();
          this.toaster.error(error.message, 'Error:');
        }
      )
      this.uploadForm.get('referenceno').setValue('');
      this.modalService.dismissAll();
    } else {
      this.toaster.error('Debe anexar una captura de referencia del pago.', 'Error:');
    }

  }

  getRetirements() {
    this.loader.show();
    this.globalService.getRequestRetirements({}).subscribe(
      result => {
        this.retirments = result;
        this.loader.hide();
      }
    )
  }

  open(content, data) {
    this.retirment = data;
    this.modalService.open(content);
  }

  open_confirm(content, retirement_id) {
    this.retirement_id = retirement_id;
    this.modalService.open(content);
  }

  rejected() {
    this.loader.show();
    this.globalService.rejectRetirement({id:this.retirement_id}).subscribe(
      result=>{
        if('ok'===result){
          this.modalService.dismissAll();
          this.getRetirements();
          this.toaster.success('Solicitud Rechazada');
          this.loader.hide();
        }else{
          this.getRetirements();
          this.toaster.error('ha ocurrido un error.', 'Error:');
          this.loader.hide();
        }
      }
    )
  }

  close() {
    this.modalService.dismissAll();
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formData.append('file', event.target.files[0]);
      this.uploadForm.get('file').setValue(file);
      // this.uploadForm.get('amount').setValue(this.depositAmount);
    }
  }

}
