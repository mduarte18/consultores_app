import { ProfileComponent } from './profile/profile.component';
import { BalanceComponent } from './balance/balance.component';
import { RequestsComponent } from './requests/requests.component';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CDashboardComponent } from './c-dashboard/c-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CDashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'requests',
        component: RequestsComponent
      },
      {
        path: 'balance',
        component: BalanceComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
  // ,
  // {
  //   path: 'cdashboard',
  //   component: CDashboardComponent
  // },
  // {
  //   path: '',
  //   component: CDashboardComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantDashboardRoutingModule { }
