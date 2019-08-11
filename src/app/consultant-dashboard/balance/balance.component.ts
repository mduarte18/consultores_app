import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from './../../services/global.service';
import { Consultant } from './../../interfaces/Consultant';
import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/global/GLOBAL';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  public consultant: Consultant = JSON.parse(localStorage.getItem('user_data'));
  balanceUser: string = "0 Bs";

  histories$: any;
  // uploadForm: FormGroup;
  depositAmount: number = 0;
  // formData = new FormData();

  accounts = {};
  retirement:any={};


  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {
    this.loader.show();
    console.log(this.consultant);
    this.globalService.getBalanceConsultant(this.consultant.id).subscribe(
      result => { this.balanceUser = result; this.loader.hide() },
      error => { console.log(error); this.loader.hide() }
    );

    this.gatAccounts();

  }

  ngOnInit() {
  }

  goToHistory() {
    GLOBAL.redirectTo('/consultant/history')
  }

  open(content) {
    this.modal.open(content);
  }
  close() {
    this.modal.dismissAll();
  }

  sendRetirement() {
    this.loader.show();
    console.log('enviado');
    this.retirement.consultant_id=this.consultant.id;
    this.retirement.retirement_status='P';

    this.globalService.createRetirement(this.retirement).subscribe(
      result => {
        console.log(result);
        if('ok'===result){
          this.modal.dismissAll();
          this.loader.hide();
          this.toaster.success('Retiro solicitado.')
        }else{
          this.loader.hide();
          this.toaster.error('error al solicitar retiro.')
        }
       },
      error => {
        console.log(error);
        this.loader.hide();
        this.toaster.error(error.message,'Error:');
      }
    );
  }

  gatAccounts() {
    this.loader.show();
    this.globalService.getAccountsForConsultant({ consultant_id: this.consultant.id }).subscribe(
      result => {
        this.accounts = result;
        this.loader.hide();
        console.log(this.accounts);
      }, error => {
        console.log(error);
        this.toaster.error(error.message, 'Error:');
      }
    );
  }
}
