import {Injectable} from '@angular/core';
import {UsersService} from './users.service';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  private currentUser: any;
  constructor(private userService: UsersService) {
  }

  authenticate(username: string, password: string): Observable<any> {
    let user;
    if (username && password) {
      user = this.userService.userList.filter((u: any) => {
          return u.username === username && u.password === password;
      });
      if (user && user.length > 0) {
        this.setCurrentUser(user[0]);
        return of(user[0]);
      }
    }
    return throwError(undefined);
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  setCurrentUser(user: any): void {
    this.isLoggedIn = true;
    this.currentUser = user;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.currentUser = undefined;
  }
}
