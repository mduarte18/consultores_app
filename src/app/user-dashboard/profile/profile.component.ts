import { User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ToastrService } from 'ngx-toastr';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem('user_data'));
  rePass: string;

  constructor(private globalService: GlobalService, private loader: Ng4LoadingSpinnerService,
    private toaster: ToastrService) {
  }

  ngOnInit() {
  }

  updateProfile() {
    this.loader.show();
    if (this.validate(this.user)) {
      this.globalService.updateUserProfile(this.user).subscribe(
        result => {
          console.log(result);
          localStorage.setItem('user_data', JSON.stringify(this.user));
          console.log(JSON.parse(localStorage.getItem('user_data')))
          this.loader.hide();
          this.toaster.success('Perfil Actualizado');
        },
        error => {
          console.log(error)
          this.toaster.error(error.message, 'Error:');

        }
      );
    }

  }


  validate(user: User): boolean {
    console.log('validate');

    if (!user.identification_document) {
      this.toaster.error('El campo de Documento de Identidad es requerido', 'Error:');
      return false;
    }
    if (isNaN(Number(user.identification_document))) {
      this.toaster.error('El campo de Documento de Identidad solo permite números.', 'Error:');
      return false;
    }
    if (!user.name) {
      this.toaster.error('El campo de Nombres es requerido.', 'Error:');
      return false;
    }
    if (!user.lastname) {
      this.toaster.error('El campo de Apellidos es requerido.', 'Error:');
      return false;
    }
    if (!user.password) {
      this.toaster.error('El campo de Contraseña es requerido.', 'Error:');
      return false;
    }
    if (!user.state) {
      this.toaster.error('Debe seleccionar un estado de residencia.', 'Error:');
      return false;
    }
    if (!user.email) {
      this.toaster.error('El campo de correo electronico es requerido.', 'Error:');
      return false;
    }
    if (!user.phone_number) {
      this.toaster.error('El campo de telefono es requerido.', 'Error:');
      return false;
    }
    if (isNaN(Number(user.phone_number))) {
      this.toaster.error('El campo de telefono solo permite números.', 'Error:');
      return false;
    }
    if (!user.birthdate) {
      this.toaster.error('El campo de Fecha de nacimiento es requerido.', 'Error:');
      return false;
    }

    return true;
  }

}
