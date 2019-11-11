import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from './../shared-module/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApproveConsultantComponent } from './approve-consultant/approve-consultant.component';
import { ApproveBalanceUserComponent } from './approve-balance-user/approve-balance-user.component';
import { ApproveBalanceConsultantComponent } from './approve-balance-consultant/approve-balance-consultant.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { AtopbarComponent } from './atopbar/atopbar.component';
import { AMainComponent } from './a-main/a-main.component';
import { UsersComponent } from './users/users.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ReportsComponent } from './reports/reports.component';
import { AdvisoryReportsComponent } from './advisory-reports/advisory-reports.component';
import { BugReportsComponent } from './bug-reports/bug-reports.component';
import { HisotoryListComponent } from './hisotory-list/hisotory-list.component';

@NgModule({
  declarations: [DashboardComponent, ApproveConsultantComponent, ApproveBalanceUserComponent, ApproveBalanceConsultantComponent, CreateAdminComponent, AdminProfileComponent, AsidebarComponent, AtopbarComponent, AMainComponent, UsersComponent, ParametersComponent, ReportsComponent, AdvisoryReportsComponent, BugReportsComponent, HisotoryListComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminDashboardModule { }
