import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from 'src/app/shared/model/carro';
import { CarroService } from 'src/app/shared/services/carro.service';

@Component({
  selector: 'app-alteracao',
  templateUrl: './alteracao.component.html',
  styleUrls: ['./alteracao.component.css']
})
export class AlteracaoComponent {
  readonly NOME_BOTAO_CADASTRAR = 'Cadastrar';
  readonly NOME_BOTAO_ATUALIZAR = 'Atualizar';

  carroTratamento: Carro;
  mensagemErro = '';
  estahCadastrado = true;
  nomeBotao = this.NOME_BOTAO_CADASTRAR;
  carroCadastrado = false;
  carroAtualizado = false;

  constructor(private carroService: CarroService, private rotaAtivada: ActivatedRoute, private roteador: Router){
    const idEdicao = this.rotaAtivada.snapshot.params['id'];
    if(idEdicao){
      this.estahCadastrado = false;
      this.carroService.pesquisarId(idEdicao).subscribe(carroRetornado => {
        this.carroTratamento = carroRetornado;
      })
    }
    this.carroTratamento = new Carro('','','','','',0,'',0,'');
    this.nomeBotao = this.estahCadastrado ? this.NOME_BOTAO_CADASTRAR  : this.NOME_BOTAO_ATUALIZAR
  }

  cadastrarOuAtualizar() : void {
    if(this.estahCadastrado){
      this.carroService.cadastrar(this.carroTratamento).subscribe(
        carro => {
          this.carroCadastrado = true;
          this.limparCampos();
          console.log(carro);

        }
      );
    } else {
      this.carroService.atualizar(this.carroTratamento).subscribe(carro => {
        this.carroAtualizado = true;
        this.limparCampos();
      })
    }
  }

  private limparCampos(): void {
    this.carroTratamento = new Carro('','','','','',0,'',0,'');
  }

}
