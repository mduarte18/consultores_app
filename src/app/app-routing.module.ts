import { ConsultantDashboardModule } from './consultant-dashboard/consultant-dashboard.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'consultant',
    loadChildren: () => import('./consultant-dashboard/consultant-dashboard.module').then(m => m.ConsultantDashboardModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./reports-module/reports-module.module').then(m => m.ReportsModuleModule)
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
