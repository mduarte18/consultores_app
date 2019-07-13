import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultantDashboardRoutingModule } from './consultant-dashboard-routing.module';
import { CDashboardComponent } from './c-dashboard/c-dashboard.component';
import { CsidebarComponent } from './csidebar/csidebar.component';
import { CtopbarComponent } from './ctopbar/ctopbar.component';

@NgModule({
  declarations: [CDashboardComponent, CsidebarComponent, CtopbarComponent],
  imports: [
    CommonModule,
    ConsultantDashboardRoutingModule
  ]
})
export class ConsultantDashboardModule { }
