import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LoginService} from './services/login.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateOutageComponent} from './components/create-outage/create-outage.component';
import {MatSelectChange} from '@angular/material/select';
import {MatOptionSelectionChange} from '@angular/material/core';
import {Router} from '@angular/router';

interface AppView {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(public loginService: LoginService, public dialog: MatDialog, private router: Router) {
  }

  selected: AppView | undefined = {value: '', viewValue: ''};

  views: AppView[] = [
    {value: 'outages', viewValue: 'Outages'},
    {value: 'crews', viewValue: 'Crews'},
    {value: 'network', viewValue: 'Network'},
  ];
  title = 'oms-ui';

  ngOnInit(): void {
  }

  logout(): void {
    this.loginService.logout();
  }

  createOutage(): void {
    this.dialog.open(CreateOutageComponent, {});
    console.log('******NAME*****', null ?? 'Delveri Chick');
  }

  handleChange(event: MatSelectChange): void {
    console.log('******CHANGE******', event);
    this.selected = this.views.filter(v => v.value === event.value)[0];
    this.router.navigateByUrl(event.value);
  }

  ngAfterViewInit(): void {
    if (this.views.length > 0) {
      this.selected = this.views[2];
    }
  }
}
