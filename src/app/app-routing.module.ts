import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LoginGuard} from './utils/login.guard';
import {AppComponent} from './app.component';
import {OutagesComponent} from './components/outages/outages.component';
import {OutageMapComponent} from './outage-map/outage-map.component';
import {CrewsComponent} from './crews/crews.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'network',
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
  },
  {
    path: 'network',
    component: OutageMapComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'crews',
    component: CrewsComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
