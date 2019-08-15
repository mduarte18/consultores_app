import { ReportsComponent } from './reports/reports.component';
import { ParametersComponent } from './parameters/parameters.component';
import { UsersComponent } from './users/users.component';
import { AMainComponent } from './a-main/a-main.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { ApproveBalanceConsultantComponent } from './approve-balance-consultant/approve-balance-consultant.component';
import { ApproveConsultantComponent } from './approve-consultant/approve-consultant.component';
import { ApproveBalanceUserComponent } from './approve-balance-user/approve-balance-user.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [{
  path: '',
  component: AMainComponent,
  children: [
    {
      path: 'profile',
      component: AdminProfileComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'approve_user_balance',
      component: ApproveBalanceUserComponent
    },
    {
      path: 'approve_consultant',
      component: ApproveConsultantComponent
    },
    {
      path: 'approve_consultant_balance',
      component: ApproveBalanceConsultantComponent
    },
    {
      path: 'parameters',
      component: ParametersComponent
    },
    {
      path: 'reports',
      component: ReportsComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
