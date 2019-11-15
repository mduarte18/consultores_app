import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatPaginatorModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantDashboardRoutingModule } from './consultant-dashboard-routing.module';
import { CDashboardComponent } from './c-dashboard/c-dashboard.component';
import { CsidebarComponent } from './csidebar/csidebar.component';
import { CtopbarComponent } from './ctopbar/ctopbar.component';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { RequestsComponent } from './requests/requests.component';
import { BalanceComponent } from './balance/balance.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankAccountComponent } from './bank-account/bank-account.component';

@NgModule({
  declarations: [CDashboardComponent, CsidebarComponent, CtopbarComponent, HistoryComponent, DashboardComponent, FooterComponent, RequestsComponent, BalanceComponent, ProfileComponent, BankAccountComponent],
  imports: [
    CommonModule,
    ConsultantDashboardRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ConsultantDashboardModule { }
