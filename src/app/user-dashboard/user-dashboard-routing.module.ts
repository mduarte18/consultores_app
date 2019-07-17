import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { HistoryComponent } from './history/history.component';
import { TansactionsComponent } from './tansactions/tansactions.component';
import { BalanceComponent } from './balance/balance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UDashboardComponent } from './u-dashboard/u-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentAppointmentComponent } from './payment-appointment/payment-appointment.component';

const routes: Routes = [{
  path: '',
  component: UDashboardComponent,
  children: [
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'balance',
      component: BalanceComponent
    },
    {
      path: 'transactions',
      component: TansactionsComponent
    },
    {
      path: 'payment',
      component: PaymentAppointmentComponent
    },
    {
      path: 'history',
      component: HistoryComponent
    },
    {
      path: 'new_appointment',
      component: NewAppointmentComponent
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
