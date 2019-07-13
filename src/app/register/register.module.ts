import { HttpClientModule } from '@angular/common/http';
import { ConsultantService } from './../services/consultant.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterConsultantComponent } from './register-consultant/register-consultant.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';

@NgModule({
  declarations: [RegisterUserComponent, RegisterConsultantComponent, SuccessRegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RegisterModule { }
