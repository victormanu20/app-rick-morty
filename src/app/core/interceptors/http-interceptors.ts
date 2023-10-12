import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from 'src/app/domain/services/error-handling.service';
import { ErrorHttp } from 'src/app/domain/models/handle-error.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorHandlingService: ErrorHandlingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          this.errorHandlingService.handleError(new ErrorHttp());
        }
        return throwError(error);
      })
    );
  }
}
