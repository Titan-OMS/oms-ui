import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LoginGuard} from './utils/login.guard';
import {AppComponent} from './app.component';
import {OutagesComponent} from './components/outages/outages.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'outages',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'outages',
    component: OutagesComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
