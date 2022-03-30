import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(readonly _authServ: AuthService ) {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler
    ): Observable<HttpEvent<unknown>> {

      const token = this._authServ.getJWT()
// console.log(token);

    const requestWithJwt = request.clone({
      setHeaders:{Authorization: `Bearer ${token}`}
    })
    return next.handle(requestWithJwt);
  }
}
