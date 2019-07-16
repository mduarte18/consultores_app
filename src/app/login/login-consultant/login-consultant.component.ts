import { GLOBAL } from './../../global/GLOBAL';
// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-consultant',
  templateUrl: './login-consultant.component.html',
  styleUrls: ['./login-consultant.component.css']
})
export class LoginConsultantComponent implements OnInit {

  public user = { email: '', pass: '' };

  constructor(private globalService: GlobalService, private toaster: ToastrService) {
    console.log('Login asesor iniciado.');
    // if()
    console.log(JSON.parse(localStorage.getItem('user_data')));
  }

  ngOnInit() {
  }

  public signIn() {

    this.globalService.singInChecked('consultant', this.user.email, this.user.pass).subscribe(
      result => {
        if (0 === result) {
          this.toaster.error('Correo y/o Contraseña invalidos.', 'Error: ');
        } else {
          if (typeof (Storage) !== undefined) {
            console.log('soportado'); // LocalStorage disponible
            localStorage.setItem('user_data', JSON.stringify(result));
            localStorage.setItem('user_type', 'C');
            GLOBAL.redirectTo('/consultant/dashboard');
          } else {
            console.log('no soportado');   // LocalStorage no soportado en este navegador
          }
          console.log(JSON.parse(localStorage.getItem('user_data')));
        }
      },
      error => {
        this.toaster.error(error, 'Error: ');
        console.log(error);
      }
    );

  }

}
