import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private _snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError(response => this.treatsWrongAnswer(response))
    );
  }

  private treatsWrongAnswer(response: HttpErrorResponse): Observable<HttpEvent<any>> {
    if (response.error instanceof ProgressEvent) {
        this._snackBar.open('Erro de conexão com o servidor', 'Fechar', { duration: 5000 });
    } else {
        this._snackBar.open('Erro: ' + response.error, 'Fechar', { duration: 5000 });
    }
    return throwError(response);
}

}
