import { Component } from '@angular/core';
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
  
  constructor(private authService: AuthService, private carroService: CarroService)  {
  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(mostrar => this.mostrarMenu = mostrar);
  }
}
