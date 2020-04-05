import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpHeaders} from '@angular/common/http';
import {HttpService} from '../http/http.service';
import {User} from '../../model/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private http: HttpService, private router: Router) {
  }

  isAuthenticated(): boolean {
    const user: User = JSON.parse(localStorage.getItem('user'));
    return user !== null && user !== undefined && !this.jwtHelper.isTokenExpired(user.token, -600);
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(encodeURI(username + ':' + password)));
    return this.http.postRequest('authenticate', headers);
  }

  logout() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(encodeURI(user.mail + ':' + 'hgfhj')));
    this.http.postRequest('logoutUser', headers).subscribe(data => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  register(user: User) {
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa(encodeURI(user.password)));
    user.password = '';
    return this.http.postRequestWithBodyAndHeaders('registerUser', user, headers);
  }
}
