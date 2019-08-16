import { Bank } from './../../interfaces/Bank';
import { Parameter } from './../../interfaces/Parameter';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  parameters: Parameter[];
  parameter = {} as Parameter;
  action: string = '';

  banks: Bank[];

  bank = {} as Bank;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {
    this.getParameters();
    this.getBanks();
  }

  ngOnInit() {
  }

  open(action, content, parameter?) {

    if (action === 'Crear') {
      this.parameter = { name: '', description: '', value: '' };
      this.action = action;
    }
    else if ('Modificar' === action) {
      this.parameter = parameter;
      this.action = action;
    }

    this.modal.open(content);
  }

  save() {
    this.loader.show();
    if ('Crear' === this.action) {

      this.globalService.createParameter(this.parameter).subscribe(
        result => {
          if ('ok' === result) {
            this.toaster.success('Registro guardado.');
            this.loader.hide();
            this.getParameters();
            console.log(result);
            this.modal.dismissAll();
          } else {
            this.toaster.error('Error al guardar el registro');
            this.loader.hide();
            console.log(result);
          }
        },
        error => {
          console.log(error);
          this.toaster.error(error.message, 'Error:');
          this.loader.hide()
        }
      );

    }

    if ('Modificar' === this.action) {
      this.globalService.updateParameter(this.parameter.id, this.parameter).subscribe(
        result => {
          if ('ok' === result) {
            this.getParameters();
            this.toaster.success('Registro guardado.');
            this.loader.hide();
            console.log(result);
            this.modal.dismissAll();
          } else {
            this.toaster.error('Error al guardar el registro');
            this.loader.hide();
            console.log(result);
          }
        },
        error => {
          console.log(error);
          this.toaster.error(error.message, 'Error:');
          this.loader.hide()
        }
      );
    }
  }

  getParameters() {
    this.loader.show();
    this.globalService.allParameters(this.parameter).subscribe(
      result => {
        this.parameters = result;
        console.log(result)
        this.loader.hide();
      },
      error => {
        this.loader.hide();
        console.log(error);
        this.toaster.error(error.message, 'Error:')
      }
    );
  }

  getBanks() {
    this.loader.show();
    this.globalService.getBanks({}).subscribe(
      result => {
        this.banks = result;
        console.log(result)
        this.loader.hide();
      },
      error => {
        this.loader.hide();
        console.log(error);
        this.toaster.error(error.message, 'Error:')
      }
    );
  }

  delete() {
    this.loader.show();
    this.globalService.deleteParameters(this.parameter.id, this.parameter).subscribe(
      result => {
        if ('ok' === result) {
          this.getParameters();
          this.toaster.warning('Registro Eliminado.');
          this.loader.hide();
          console.log(result);
          this.modal.dismissAll();
        } else {
          this.toaster.error('Error al guardar el registro');
          this.loader.hide();
          console.log(result);
        }
      },
      error => {
        console.log(error);
        this.toaster.error(error.message, 'Error:');
        this.loader.hide()
      }
    )
  }

  openConfirm(content, parameter) {
    this.parameter = parameter;
    this.modal.open(content);
  }

  close() {
    this.modal.dismissAll();
  }

  open_bank(action, content, data?) {
    if (action === 'Crear') {
      this.bank = { name: '', code: '', identification_document: '', account_type: '' };
      this.action = action;
    }
    else if ('Modificar' === action) {
      this.bank = data;
      this.action = action;
    }
    this.modal.open(content);
  }

  save_bank() {
    this.loader.show();

    if ('Crear' === this.action) {
      this.globalService.saveBanks(this.bank).subscribe(
        result => {
          if ('ok' === result) {
            this.getBanks();
            this.toaster.success('Registro Guardado')
            this.modal.dismissAll();
            this.loader.hide();
          } else {
            this.getBanks();
            this.toaster.error('Registro no guardado')
            this.loader.hide();
          }
        }
      );
    }

    if ('Modificar' === this.action) {
      this.globalService.updateBanks(this.bank, this.bank.id).subscribe(
        result => {
          if ('ok' === result) {
            this.getParameters();
            this.toaster.success('Registro guardado.');
            this.loader.hide();
            console.log(result);
            this.modal.dismissAll();
          } else {
            this.toaster.error('Error al guardar el registro');
            this.loader.hide();
            console.log(result);
          }
        },
        error => {
          console.log(error);
          this.toaster.error(error.message, 'Error:');
          this.loader.hide()
        }
      );
    }

  }

  open_confirm_bank(content, bank){
    this.bank = bank;
    this.modal.open(content);
  }

  delete_bank() {
    this.loader.show();
    this.globalService.deleteBanks(this.bank, this.bank.id).subscribe(
      result => {
        if ('ok' === result) {
          this.getBanks();
          this.toaster.warning('Registro Eliminado.');
          this.loader.hide();
          console.log(result);
          this.modal.dismissAll();
        } else {
          this.toaster.error('Error al guardar el registro');
          this.loader.hide();
          console.log(result);
        }
      },
      error => {
        console.log(error);
        this.toaster.error(error.message, 'Error:');
        this.loader.hide()
      }
    )
  }

}
