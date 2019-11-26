import { GLOBAL } from './../../global/GLOBAL';
import { User } from './../../interfaces/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public user: User = JSON.parse(localStorage.getItem('user_data'));
  datings$: any;
  dating: any;
  docs: any;
  length: any;
  formdata = new FormData();
  urls: any[];
  publicUrl = GLOBAL.uploadsUrl;


  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
              private toaster: ToastrService, private modal: NgbModal) {
    this.getDatings(this.user.id);
  }

  ngOnInit() {
  }

  getDatings(id): void {
    this.loader.show();
    this.globalService.getDatingsByUser(id).subscribe(
      result => {
        this.datings$ = result;
        this.loader.hide();
      },
      error => {
        console.log(error);
        this.loader.hide();
        this.toaster.error(error.message, 'Error:');
      }
    );
  }

  open(content: any, dating, consult?: boolean) {
    this.dating = dating;
    if (consult && ('Solicitado' === dating.dating_status ||
      'Aprobada' === dating.dating_status)) {
      this.globalService.getAllAttached(this.dating.id).subscribe(
        result => {
          this.urls = result;
          console.log(this.urls);
        },
        error => {
          console.error(error);
        }
      );
    }
    this.modal.open(content);
  }

  close() {
    this.urls = [];
    this.modal.dismissAll();
  }

  cancelledDating() {
    this.loader.show();
    this.modal.dismissAll();
    this.globalService.cancelDating(this.dating.id).subscribe(
      response => {
        if ('ok' === response) {
          this.getDatings(this.user.id);
          this.loader.hide();
          this.toaster.success('Solicitud de asesoria cancelada.', 'Exitoso');
        } else {
          this.loader.hide();
          this.toaster.error('No se ha podido cancelar.', 'Error:');
        }
      },
      error => {
        this.loader.hide();
        this.toaster.error('Ha ocurrido un error.', 'Error:');
        console.error(error);
      }
    );
  }
  finishedDating() {
    this.loader.show();
    this.modal.dismissAll();
    this.globalService.finishDating(this.dating.id).subscribe(
      response => {
        if ('ok' === response) {
          this.getDatings(this.user.id);
          this.loader.hide();
          this.toaster.success('Solicitud de asesoria Finalizada.', 'Exitoso');
        } else {
          this.loader.hide();
          this.toaster.error('No se ha podido finalizar.', 'Error:');
        }
      },
      error => {
        this.loader.hide();
        this.toaster.error('Ha ocurrido un error.', 'Error:');
        console.error(error);
      }
    );
  }

  openLink(link) {
    console.log('Open Link');
    window.open(link ? link : '', '_blank');
    this.globalService.createUserHistory({
      user_id: this.user.id,
      movement_type: 'Entrada a sala de conferencia',
      description: 'El usuario ha entrado al link de sala de conferencia, pare recibir su asesoria.'
    }).subscribe(
      result => {
        console.log('notificacion enviada.', result);
      },
      error => {
        this.toaster.error(error.message, 'Error:');
        console.error(error);
      }
    );
  }

  send_error() {
    if (confirm(`Ha ocurrido un error con el sistema de citas, al seleccionar aceptar
                 se enviara una notificacion al equipo y sera corregido el incidente,
                 disculpe las molestias.`)) {
      this.globalService.createUserHistory({
        user_id: this.user.id,
        movement_type: 'Enlace Caido',
        description: 'El usuario no ha podido entrar a la sala de conferencia.'
      }).subscribe(
        result => {
          console.log('notificacion enviada.', result);
        },
        error => {
          this.toaster.error(error.message, 'Error:');
          console.error(error);
        }
      );
    }
  }

  uploads(event) {
    console.log(event);
    this.docs = event.target.files as File;
    this.length = event.target.files.length as File;
    console.log(this.docs, this.length);

    for (let i = 0; i < this.length; i++) {
      if (this.docs[i].size < 5000) {
        this.formdata.append('docs' + i, this.docs[i], this.docs[i].name);
        this.formdata.append('length', this.length);
      } else {
        this.toaster.error('El archivo es muy grande, solo se admite una tamaño de 5MB por archivo.', 'Error:');
        this.close();
        return;
      }
    }
  }

  send_files() {
    console.log('form');
    this.formdata.append('dating_id', this.dating.id);
    this.globalService.sendFiles(this.formdata).subscribe(
      result => {
        if ('ok' === result.response) {
          this.toaster.success(`Se han guardado ${result.saved_files} archivos`, 'Guardado');
        } else {
          this.toaster.error(`Ha ocurrido un error al guardar los archivos.`, 'Error:');
        }
      },
      error => {
        this.toaster.error(error.message);
      }
    );

    return false;
  }

}
