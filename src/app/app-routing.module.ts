/**
 * @author - Ronak Patel.
 * @description -
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';

const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'user-profile',
    loadChildren: './user-profile/user-profile.module#UserProfileModule'
  },
  {
    path: 'invoice',
    loadChildren: './invoices/invoices.module#InvoicesModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**', redirectTo: 'login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
