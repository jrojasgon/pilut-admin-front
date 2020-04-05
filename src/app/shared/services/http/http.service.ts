import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../../model/user';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  endpointUrl: string = environment.apiUrl;

  constructor(private httpService: HttpClient) {
  }

  getRequestWithAut(urlComplement: string) {
    return this.getRequest(this.endpointUrl + urlComplement, this.createAuthHeader());
  }

  getRequest(urlComplement: string, headers: HttpHeaders) {
    return this.httpService.get<any>(this.endpointUrl + urlComplement, {headers}).pipe(map(data => {
      return data;
    }));
  }

  postRequestWithAut(urlComplement: string) {
    return this.postRequest(this.endpointUrl + urlComplement, this.createAuthHeader());
  }

  postRequest(urlComplement: string, headers: HttpHeaders) {
    return this.httpService.post<any>(this.endpointUrl + urlComplement, '', {headers}).pipe(map(data => {
      return data;
    }));
  }

  postRequestWithBody(urlComplement: string, body: any) {
    const headers = this.createAuthHeader();
    return this.httpService.post<any>(this.endpointUrl + urlComplement, body, {headers}).pipe(map(data => {
      return data;
    }));
  }

  postRequestWithBodyAndHeaders(urlComplement: string, body: any, headers: HttpHeaders) {
    return this.httpService.post<any>(this.endpointUrl + urlComplement, body, {headers}).pipe(map(data => {
      return data;
    }));
  }

  private createAuthHeader(): HttpHeaders {
    const user: User = JSON.parse(localStorage.getItem('user'));
    return new HttpHeaders().set('Authorization', 'Bearer ' + user.token);
  }
}
