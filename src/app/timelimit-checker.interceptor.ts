import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap, throwError, catchError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TimelimitCheckerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(
        (err: { status: number; error: { message: any }; statusText: any }) => {
          if ([401, 403].includes(err.status)) {
            // auto logout if 401 or 403 response returned from api
            this.router.navigate(['login']);
            alert('your session expired');
          }
          const error = err.error?.message || err.statusText;
          console.error(err);
          return throwError(() => error);
        }
      )
    );
  }
}
