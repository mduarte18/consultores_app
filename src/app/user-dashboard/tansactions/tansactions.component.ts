import { User } from './../../interfaces/User';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService, ToastRef } from 'ngx-toastr';



@Component({
  selector: 'app-tansactions',
  templateUrl: './tansactions.component.html',
  styleUrls: ['./tansactions.component.css']
})
export class TansactionsComponent implements OnInit {

  uploadForm: FormGroup;
  user: User = JSON.parse(localStorage.getItem('user_data'));
  balanceUser: string = "0";
  depositAmount: number = 0;
  formData = new FormData();

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder,
    private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService) {
    this.globalService.getBalanceUser(this.user.id).subscribe(
      result => { this.balanceUser = result },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      amount: new FormControl(),
      deposit: new FormControl(),
      bank: new FormControl(),
      referenceno: new FormControl(),
      payment_method: new FormControl()
    });
  }

  open(content) {
    console.log(content);
    this.modalService.open(content);
  }
  sendDeposit() {
    this.loader.show();
    console.log('enviado');
    // this.formData.append('file', this.uploadForm.get('deposit').value);
    this.formData.append('amount', this.uploadForm.get('amount').value);
    this.formData.append('bank', this.uploadForm.get('bank').value);
    this.formData.append('referenceno', this.uploadForm.get('referenceno').value);
    this.formData.append('payment_method', this.uploadForm.get('payment_method').value);
    this.formData.append('user_id',this.user.id.toString());

    console.log(this.formData);

    this.globalService.uploadDeposit(this.formData).subscribe(
      result => { console.log(result);
                  this.loader.hide();
                  this.toaster.success('Se ha enviado la solicitud correctamente'); },
      error => { console.log(error);
                  this.loader.hide();
                  this.toaster.error(error.message, 'Error:'); }
    )
    this.uploadForm.get('amount').setValue(0);
    this.uploadForm.get('referenceno').setValue('');
    this.modalService.dismissAll();
  }

  close() {
    // console.log(content);
    this.modalService.dismissAll();
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formData.append('deposit', event.target.files[0]);
      this.uploadForm.get('deposit').setValue(file);
      // this.uploadForm.get('amount').setValue(this.depositAmount);
    }
  }

  onSubmit() {
    // const formData = new FormData();
    // formData.append('file', this.uploadForm.get('deposit').value);

    // console.log(formData);

    // this.globalService.uploadDeposit(formData).subscribe(
    //   result => console.log(result),
    //   error => console.log(error)
    // )
  }

}
