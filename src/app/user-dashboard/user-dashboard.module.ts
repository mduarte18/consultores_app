import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatPaginatorModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UDashboardComponent } from './u-dashboard/u-dashboard.component';
import { UtopbarComponent } from './utopbar/utopbar.component';
import { UsidebarComponent } from './usidebar/usidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { HistoryComponent } from './history/history.component';
import { PaymentAppointmentComponent } from './payment-appointment/payment-appointment.component';
import { TansactionsComponent } from './tansactions/tansactions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsultantsComponent } from './consultants/consultants.component';
import { RequestsComponent } from './requests/requests.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [UDashboardComponent,
    UtopbarComponent, UsidebarComponent, ProfileComponent,
    NewAppointmentComponent, HistoryComponent,
    PaymentAppointmentComponent,
    TansactionsComponent, DashboardComponent,
    ConsultantsComponent, RequestsComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UserDashboardModule { }
