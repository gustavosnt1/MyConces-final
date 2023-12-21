import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroCadastroComponent } from './carro/carro-cadastro/carro-cadastro.component';
import { CarroListagemComponent } from './carro/carro-listagem/carro-listagem.component';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "cadastrar-carros",
    component: CarroCadastroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "listar-carros",
    component: CarroListagemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edicao-carro/:id",
    component: CarroCadastroComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
