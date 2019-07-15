import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginConsultantComponent } from './login-consultant/login-consultant.component';
import { ChooseLoginComponent } from './choose-login/choose-login.component';
import { FormsModule } from '@angular/forms';
import { LoginAdminComponent } from './login-admin/login-admin.component';

@NgModule({
  declarations: [LoginUserComponent, LoginConsultantComponent, ChooseLoginComponent, LoginAdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    HttpClientModule,
  ]
})
export class LoginModule { }
