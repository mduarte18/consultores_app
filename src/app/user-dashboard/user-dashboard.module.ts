import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UDashboardComponent } from './u-dashboard/u-dashboard.component';
import { UtopbarComponent } from './utopbar/utopbar.component';
import { UsidebarComponent } from './usidebar/usidebar.component';

@NgModule({
  declarations: [UDashboardComponent, UtopbarComponent, UsidebarComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
