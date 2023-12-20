import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  mostrarMenu: boolean = false;
  
  constructor(private authService: AuthService)  {
  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(mostrar => this.mostrarMenu = mostrar);
  }

}
