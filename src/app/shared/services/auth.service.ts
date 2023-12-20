import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuarios';
import { Router } from '@angular/router';
import { EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public usuarioAutenticado: boolean = false;
    mostrarMenuEmitter = new EventEmitter<boolean>();


  constructor(private router: Router) { }


  fazerLogin(usuario: Usuario){
    if (usuario.nome === 'admin@gmail.com' && usuario.senha === '12345')  {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/cadastrar-carros']);
    }  else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
    }
  }
}
