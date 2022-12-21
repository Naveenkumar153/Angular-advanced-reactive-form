import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError  } from 'rxjs/operators';
@Injectable()
export class AppLevelHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = request.clone({
      setHeaders:{ 'Content-Type': 'application/json' }
    });
    return next.handle(authReq).pipe(catchError((err) => {
        if(err instanceof HttpErrorResponse){
          if (err.status === 401) {
            console.log('this should print your error!', err.error);
          }else{
            console.log(err);
          }
        }
        return throwError(() => err)
      }
    )) as any;

  }
}
