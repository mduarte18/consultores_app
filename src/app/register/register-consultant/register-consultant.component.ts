import { CareerService } from './../../services/career.service';
import { ConsultantService } from './../../services/consultant.service';
import { Consultant } from './../../interfaces/Consultant';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-consultant',
  templateUrl: './register-consultant.component.html',
  styleUrls: ['./register-consultant.component.css']
})
export class RegisterConsultantComponent implements OnInit {

  public consultant: Consultant;
  public rePass: string;

  public careerValue: any;

  constructor(private consultantService: ConsultantService, private careerService: CareerService, private toaster: ToastrService) {

    this.consultant = {
      identification_document: '',
      name: '',
      lastname: '',
      attach_certification: '',
      attach_document: '',
      birthdate: '',
      email: '',
      password: '',
      phone_number: '',
      validate: '',
      career_id: '',
    };

    this.careerService.get_careers().subscribe(
      result => {
        if (result !== null) {
          console.log(result);
          this.careerValue = result;
        } else {
          console.log('ha ocurrido un error');
        }
      },
      error => {
        console.error(error);

      });

    this.rePass = '';
  }

  ngOnInit() {
  }

  register_consultant() {
    this.consultantService.create_consultant(this.consultant).subscribe(
      result => {
        if (result !== 'success') {
          console.log(result);
          this.toaster.error(result, 'Error:');
        } else {
          console.log(result.data);
          this.toaster.success('¡Registro Exitoso!');
          setTimeout(() => { location.href = '/login'; }, 5000);
        }
      },
      error => {
        console.log(error);
        this.toaster.error(error, 'Error: ');
      });
  }

}
