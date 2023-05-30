import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { LoginComponent } from 'projects/locationlibrary/src/lib/pages/login/login.component';

const routes: Routes = [{
  path: '', component: DefaultComponent,
  children: [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
