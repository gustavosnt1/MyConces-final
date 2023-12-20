import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroCadastroComponent } from './carro/carro-cadastro/carro-cadastro.component';
import { CarroListagemComponent } from './carro/carro-listagem/carro-listagem.component';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';


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
    component: CarroCadastroComponent
  },
  {
    path: "listar-carros",
    component: CarroListagemComponent
  },
  {
    path: "edicao-carro/:id",
    component: CarroCadastroComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
