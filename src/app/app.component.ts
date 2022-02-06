import { Component } from '@angular/core';
import {LoginService} from './services/login.service';

interface AppView {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selected = 'option2';

  views: AppView[] = [
    {value: 'outages', viewValue: 'Outages'},
    {value: 'crews', viewValue: 'Crews'},
    {value: 'network', viewValue: 'Network'},
  ];
  constructor(public loginService: LoginService) {
  }
  title = 'oms-ui';

  logout(): void {
    this.loginService.logout();
  }
}
