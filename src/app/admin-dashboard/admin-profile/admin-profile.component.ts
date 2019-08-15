import { User } from './../../interfaces/User';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  user: User;
  new_pass: string = '';
  re_new_pass: string = '';
  modal_pass: string = '';
  current: string = '';

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService, private modal: NgbModal) {
    this.user = JSON.parse(localStorage.getItem('user_data'));
    this.globalService.currentPassword({ user_id: this.user.id }).subscribe(
      result => { this.current = result }
    );
  }

  ngOnInit() {
  }

  close() {
    this.modal.dismissAll();
  }

  change() {
    this.loader.show();
    console.log(this.user);
    console.log(this.current);
    if ('' === this.modal_pass) {
      this.toaster.error('Introducir contraseña', 'Error:')
      this.loader.hide();
      return;
    } else if (this.current !== this.modal_pass) {
      this.toaster.error('Contraseña invalida', 'Error:')
      this.loader.hide();
      return;
    }

    this.globalService.changePassword({ user_id: this.user.id, new_password: this.new_pass }).subscribe(
      result => {
        if ('ok' === result) {
          this.modal.dismissAll();
          this.loader.hide();
          this.toaster.success('Contraseña cambiada');
        } else {
          this.loader.hide();
          this.toaster.error('Error al cambiar contraseña.');
        }
      }
    );

    // this.modal.dismissAll();
  }

  open(content) {
    this.modal.open(content);
  }

}
