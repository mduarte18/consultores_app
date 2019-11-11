import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from 'src/app/services/global.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Consultant } from './../../interfaces/Consultant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  public consultant: Consultant = JSON.parse(localStorage.getItem('user_data'));

  account: any = {};

  accounts: any[];

  isNew: boolean = false;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private modal: NgbModal, private toaster: ToastrService) {
    this.gatAccounts();
  }

  ngOnInit() {
  }

  close() {
    this.modal.dismissAll()
  }

  open(content, acct) {
    console.log(acct);
    if (acct !== null) {
      this.isNew = false;
      this.account = acct;
    } else {
      this.isNew = true;
      this.account = {}
    }


    this.modal.open(content);
  }

  create_account() {
    console.log(this.account);
    this.account.consultant_id = this.consultant.id;

    this.loader.show();

    if (this.validate(this.account)) {

      if(this.isNew){
        console.log('create')
        this.globalService.createAccountForConsultant(this.account).subscribe(
          result => {
            if ('ok' === result) {
              this.account = {};
              this.gatAccounts();
              this.modal.dismissAll();
              this.toaster.success('Cuenta registrada.');
            } else {
              this.toaster.error(result);
              this.loader.hide()
            }
          },
          error => {
            console.log(error);
            this.loader.hide();
            this.gatAccounts();
            this.toaster.error(error.message, 'Error');
          }
        );
      }else{
        console.log('update')
        this.globalService.updateAccountForConsultant(this.account.id, this.account).subscribe(
          result => {
            if ('ok' === result) {
              this.account = {};
              this.gatAccounts();
              this.modal.dismissAll();
              this.toaster.success('Cuenta registrada.');
            } else {
              this.toaster.error(result);
              this.loader.hide()
            }
          },
          error => {
            console.log(error);
            this.loader.hide();
            this.gatAccounts();
            this.toaster.error(error.message, 'Error');
          }
        );
      }

      this.globalService.createAccountForConsultant(this.account).subscribe(
        result => {
          if ('ok' === result) {
            this.account = {};
            this.gatAccounts();
            this.modal.dismissAll();
            this.toaster.success('Cuenta registrada.');
          } else {
            this.toaster.error(result);
            this.loader.hide()
          }
        },
        error => {
          console.log(error);
          this.loader.hide();
          this.gatAccounts();
          this.toaster.error(error.message, 'Error');
        }
      );
    }
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

  update_account(id, to_use) {
    this.loader.show();
    if (this.validate(this.account)) {
      this.globalService.updateUseAcct(this.account).subscribe(
        result => {
          if ('ok' === result) {
            this.gatAccounts();
            this.loader.hide();
            this.toaster.success('Estado de cuenta Actualizado');
          } else {
            this.loader.hide();
            this.toaster.error('Error al actualizar');
          }
        },
        error => {
          console.log(error);
          this.toaster.error(error.message, 'Error al actualizar:');
        }
      );
    }
  }

  validate(acct): boolean {
    if (!acct.bank) {
      this.toaster.error('Debe Seleccionar un banco.', 'Error:');
      return false;
    }

    if (isNaN(Number(acct.account_number))) {
      this.toaster.error('El número de Cuenta Bancaria solo admite números.', 'Error:');
      this.loader.hide();
      return;
    }

    if (!acct.account_number) {
      this.toaster.error('Debe ingresar un numero de cuenta valido.', 'Error:');
      return false;
    }

    if (acct.account_number.length != 20) {
      this.toaster.error('El numero de cuenta debe tener 20 digitos.', 'Error:');
      return false;
    }

    return true;
  }

}
