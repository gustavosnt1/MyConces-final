import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { CarroModule } from './carro/carro.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { CarroFirestoreService } from './shared/services/carroFirestore.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    CarroModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [AuthService,
    CarroFirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
