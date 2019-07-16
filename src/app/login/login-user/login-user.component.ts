import { GLOBAL } from './../../global/GLOBAL';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  public user = { email: '', pass: '' };


  constructor(private globalService: GlobalService, private toaster: ToastrService) {
    console.log('Login usuario');
   }

  ngOnInit() {
  }

  public signIn() {

    this.globalService.singInChecked('user', this.user.email, this.user.pass).subscribe(
      result => {
        if (0 === result) {
          this.toaster.error('Correo y/o Contraseña invalidos.', 'Error: ');
        } else {
          // this.toaster.success('Correo y Contraseña Validos.', 'Exito! ');
          if (typeof (Storage) !== undefined) {
            console.log('soportado'); // LocalStorage disponible
            localStorage.setItem('user_data', JSON.stringify(result));
            localStorage.setItem('user_type', 'U');
            GLOBAL.redirectTo('/user');
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
