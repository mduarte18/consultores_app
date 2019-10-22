import { GlobalService } from './../../services/global.service';
import { User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public consultant: User;
  public rePass;

  constructor(private globalService: GlobalService, private toaster: ToastrService) {

    this.consultant = {
      identification_document: '',
      name: '',
      lastname: '',
      birthdate: '',
      phone_number: '',
      attach_document: '',
      state: '',
      email: '',
      password: '',
      role_id: '',
    };

    this.rePass = '';
  }

  ngOnInit() {
  }

  registerUser() {
    this.consultant.role_id = 'US';
    if (this.validate(this.consultant)) {
      this.globalService.create_user(this.consultant).subscribe(
        result => {
          if (result !== 'success') {
            this.toaster.error(result, 'Error:');
          } else {
            this.toaster.success('¡Registro Exitoso!');
            setTimeout(() => { location.href = '/login'; }, 5000);
            // location.href = '/login';
          }
        },
        error => {
          console.log(error);
          this.toaster.error(error, 'Error: ');
        });
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
