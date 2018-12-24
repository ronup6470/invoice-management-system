/**
 * @author Akshita Kapadia
 * apply routing for components and give it path
 * view component is default routed component 
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';

import { DetailsComponent } from './details/details.component';
import { GuardService } from './guard.service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'view',
    pathMatch:'full'
  },
  {
    path:'view',
    component:ViewComponent
  },
  {
    path:'add',
    component:AddComponent,
    canDeactivate:[GuardService]
  },
  {
    path:'edit/:id',
    component:AddComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
