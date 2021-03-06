import { UtopbarComponent } from './utopbar/utopbar.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { HistoryComponent } from './history/history.component';
import { TansactionsComponent } from './tansactions/tansactions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UDashboardComponent } from './u-dashboard/u-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentAppointmentComponent } from './payment-appointment/payment-appointment.component';
import { ConsultantsComponent } from './consultants/consultants.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [{
  path: '',
  component: UtopbarComponent,
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
    {
      path: 'consultants',
      component: ConsultantsComponent
    },
    {
      path: 'requests',
      component: RequestsComponent
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
