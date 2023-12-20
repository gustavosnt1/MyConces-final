import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Usuario } from 'src/app/shared/model/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario('','');

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  fazerLogin() {
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

}
