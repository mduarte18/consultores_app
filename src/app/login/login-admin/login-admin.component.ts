import { GLOBAL } from './../../global/GLOBAL';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  public user = { username: '', pass: '' };


  constructor(private globalService: GlobalService, private toaster: ToastrService) {
    console.log('Login Administrador');
   }

  ngOnInit() {
  }

  public signIn() {

    this.globalService.singInChecked('admin', this.user.username, this.user.pass).subscribe(
      result => {
        if (0 === result) {
          this.toaster.error('Usuario no reconocido como Administrador.', 'Error: ');
        } else {
          // this.toaster.success('Correo y Contraseña Validos.', 'Exito! ');
          if (typeof (Storage) !== undefined) {
            console.log('soportado'); // LocalStorage disponible
            localStorage.setItem('user_data', JSON.stringify(result));
            localStorage.setItem('user_type', 'A');
            GLOBAL.redirectTo('/admin');
          } else {
            console.log('no soportado');   // LocalStorage no soportado en este navegador
          }
        }
      },
      error => {
        this.toaster.error(error, 'Error: ');
        console.log(error);
      }
    );

  }
}
