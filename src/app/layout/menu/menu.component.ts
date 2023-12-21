import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CarroService } from 'src/app/shared/services/carro.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  mostrarMenu: boolean = false;
  totalVendido: number = 0;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(mostrar => {
      const isPaginaInicialOuLogin = this.router.url === '/' || this.router.url === '/login';
      this.mostrarMenu = mostrar && !isPaginaInicialOuLogin;
    });

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const isPaginaInicialOuLogin = event.url === '/' || event.url === '/login';
      this.mostrarMenu = this.authService.isUsuarioAutenticado() && !isPaginaInicialOuLogin;
    });
  }
}
