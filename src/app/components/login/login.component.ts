import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() loginError: string | null = '';

  @Output() submitEM = new EventEmitter();

  constructor(private loginService: LoginService, private router: Router) {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(): void {
    if (this.form.valid && this.form.value.username.length > 0 && this.form.value.password.length > 0) {
      if (this.form.value.username && this.form.value.password) {
        this.loginService.authenticate(this.form.value.username,
          this.form.value.password).subscribe((userInfo) => {
          if (userInfo) {
            this.loginError = null;
            this.router.navigate(['/']);
          }
        }, (error => {
          this.loginError = 'Incorrect Login Info';
        }));
      }
      this.submitEM.emit(this.form.value);
    } else {
      this.loginError = 'Incorrect Login Info';
    }
  }

  ngOnInit(): void {
  }

}
