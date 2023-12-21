import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,

    }
  ]
})
export class InterceptorsModule { }
