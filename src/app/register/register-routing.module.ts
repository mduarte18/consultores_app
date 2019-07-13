import { SuccessRegisterComponent } from './success-register/success-register.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterConsultantComponent } from './register-consultant/register-consultant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    component: RegisterUserComponent
  },
  {
    path: 'consultant',
    component: RegisterConsultantComponent
  },
  {
    path: 'success',
    component: SuccessRegisterComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
