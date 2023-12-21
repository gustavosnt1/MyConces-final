import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/shared/model/carro';
import { CarroService } from 'src/app/shared/services/carro.service';
import { MessageService } from 'src/app/shared/services/mensagens.service';

@Component({
  selector: 'app-carro-listagem',
  templateUrl: './carro-listagem.component.html',
  styleUrls: ['./carro-listagem.component.css']
})
export class CarroListagemComponent {
  carros: Carro[] = [];
  carrosPesquisa: Array<Carro> = [];
  modeloPesquisado: string = '';
  carrosPesquisados: Carro[] = [];

  constructor(private carroService: CarroService, private roteador: Router, private messageService: MessageService){

  }

  ngOnInit(){
    this.carroService.listar().subscribe(carrosRetornados => {
      this.carros = carrosRetornados;
    });

  }

  remover(carroARemover: Carro): void {
    this.carroService.remover(carroARemover).subscribe(carroRemovido => {
        console.log("Carro removido");
      const indexARemover = this.carros.findIndex( carro =>
        carro.id === carroARemover.id);
        console.log(`carro a remover ${indexARemover}`);
        if(indexARemover >= 0){
          this.carros.splice(indexARemover, 1);
          this.messageService.showSuccess('Carro excluído com sucesso.');
        }
    });
  }

  editar(id: string) : void {
    this.roteador.navigate(['edicao-carro', id]);
  }
}
