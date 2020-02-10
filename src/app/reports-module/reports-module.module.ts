import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ReportsModuleRoutingModule } from './reports-module-routing.module';
import { ReportForStateComponent } from './report-for-state/report-for-state.component';
import { ReportForCareersComponent } from './report-for-careers/report-for-careers.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [ReportForStateComponent, ReportForCareersComponent],
  imports: [
    CommonModule,
    ReportsModuleRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ]
})
export class ReportsModuleModule { }
