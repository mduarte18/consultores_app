import { ReportForCareersComponent } from './report-for-careers/report-for-careers.component';
import { ReportForStateComponent } from './report-for-state/report-for-state.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ {
  path: 'for_state',
  component: ReportForStateComponent
},
{
  path: 'for_career',
  component: ReportForCareersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsModuleRoutingModule { }
