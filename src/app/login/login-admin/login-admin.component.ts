import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
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


  constructor(private globalService: GlobalService, private toaster: ToastrService,  private loader: Ng4LoadingSpinnerService) {
    console.log('Login Administrador');
   }

  ngOnInit() {
  }

  public signIn() {
    this.loader.show()
    this.globalService.singInChecked('admin', this.user.username, this.user.pass).subscribe(
      result => {
        if (0 === result) {
          this.toaster.error('Usuario no reconocido como Administrador.', 'Error: ');
          this.loader.hide();
        } else {
          // this.toaster.success('Correo y Contraseña Validos.', 'Exito! ');
          if (typeof (Storage) !== undefined) {
            console.log('soportado'); // LocalStorage disponible
            localStorage.setItem('user_data', JSON.stringify(result));
            localStorage.setItem('user_type', 'A');
            GLOBAL.redirectTo('/admin/dashboard');
            this.loader.hide();
          } else {
            console.log('no soportado');
            this.loader.hide();   // LocalStorage no soportado en este navegador
          }
        }
      },
      error => {
        this.toaster.error(error, 'Error: ');
        console.log(error);
        this.loader.hide();
      }
    );

  }
}
