import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {AuthService} from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 409) {
            console.log('inspect conflict');
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.auth.logout();
          this.router.navigate(['/login']);
        }
        return throwError(error);
      }));

  }
}
