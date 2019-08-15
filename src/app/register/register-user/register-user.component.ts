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
    console.log(this.consultant);
    this.globalService.create_user(this.consultant).subscribe(
      result => {

        if (result !== 'success') {
          console.log(result);
          this.toaster.error(result, 'Error:');
        } else {
          console.log(result.data);
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
