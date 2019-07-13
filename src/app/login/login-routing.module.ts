import { LoginConsultantComponent } from './login-consultant/login-consultant.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ChooseLoginComponent } from './choose-login/choose-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: ChooseLoginComponent
  },
  {
    path: 'login',
    component: ChooseLoginComponent
  },
  {
    path: 'user',
    component: LoginUserComponent
  },
  {
    path: 'consultant',
    component: LoginConsultantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
