import { GLOBAL } from './../../global/GLOBAL';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-approve-balance-user',
  templateUrl: './approve-balance-user.component.html',
  styleUrls: ['./approve-balance-user.component.css']
})
export class ApproveBalanceUserComponent implements OnInit {

  deposits: any[];
  deposit: any;

  uploadUrl: string = GLOBAL.uploadsUrl;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) { }

  ngOnInit() {
    this.getAllDeposits();
  }

  getAllDeposits() {
    this.loader.show();
    this.globalService.getAllPendingDeposits({}).subscribe(
      result => {
        this.deposits = result;
        console.log(this.deposits);
        this.loader.hide();
      },
      error => {
        console.log(error);
        this.loader.hide();
      }
    );
  }

  open(content, deposit) {
    this.deposit = deposit;
    this.modal.open(content);
  }

  close() {
    // this.action = '';
    this.deposit = {};
    // this.value = '';
    this.modal.dismissAll();
  }

  updateStatus(deposit, status) {
    this.loader.show();
    this.modal.dismissAll();
    this.globalService.updateStatusDeposit({ new_status: status, deposit_id: deposit.id }).subscribe(
      result => {
        if ('ok' === result) {
          this.getAllDeposits();
          this.deposit = {};
          this.loader.hide();
          this.toaster.success('Saldo de usuario actualizado.');
        } else {
          this.getAllDeposits();
          this.deposit = {};
          this.loader.hide();
          this.toaster.error('Ha ocurrido un error.');
        }
      },
      error => {
        this.deposit = {};
        this.loader.hide();
        this.toaster.error(error.message,'Error:');
      }
    );
  }

}
