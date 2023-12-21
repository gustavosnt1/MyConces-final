import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from 'src/app/shared/model/carro';
import { CarroService } from 'src/app/shared/services/carro.service';
import { MessageService } from 'src/app/shared/services/mensagens.service';

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
  form: FormGroup;
  carroId: any;
  carro!: Carro;
  isEditMode: boolean = false;

  constructor(private carroService: CarroService, private rotaAtivada: ActivatedRoute, private roteador: Router, private formBuilder: FormBuilder, private route:ActivatedRoute,
    private messageService: MessageService){
    this.form = this.formBuilder.group({
      Marca: ["", [Validators.required]],
      Modelo: ["", [Validators.required]],
      Cor: ["", [Validators.required]],
      Ano: ["", [Validators.required]],
      Quilometragem: ["", [Validators.required]],
      Preco: ["", [Validators.required]],
      Categoria: ["", [Validators.required]],
      Quantidade: ["", [Validators.required]]
    })

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

  ngOnInit(): void {
    this.checkEditMode();

    this.route.params.subscribe((params)=>{
      this.carroId=params['id'] ? params['id']: null;

      if(!this.carroId)
       return;

      this.carroService.pesquisarId(this.carroId).subscribe((carro:Carro)=>{
        this.carro=carro;
      })
    })
  }

  private checkEditMode(): void {
    this.route.params.subscribe((params) => {
      this.carroId = params['id'] ? parseInt(params['id']) : null;
      this.isEditMode = this.carroId !== null;

      if (this.isEditMode) {
        this.loadCarros();
      }
    });
  }

  private loadCarros(): void {
    if (this.carroId !== null) {
      this.carroService.pesquisarId(this.carroId).subscribe((carro: Carro) => {
        this.form.patchValue({
          Marca: carro.marca,
          Modelo: carro.modelo,
          Cor: carro.cor,
          Ano: carro.anoFabricacao,
          Quilometragem: carro.quilometragem,
          Preco: carro.preco,
          Categoria: carro.categoria,
          Quantidade: carro.qtdDisponivel
        });
      });
    }
  }

  OnSubmit(): void{
    if(this.isEditMode){
      this.atualizar();
      console.log("chamou o atualizou");
    } else{
      this.cadastrar();
      console.log("chamou o cadastrou");
    }
  }

  cadastrar() : void {
    if(this.form.invalid)
      return;

    console.log("cadastrou");

    const {Marca, Modelo, Cor, Ano, Quilometragem, Preco, Categoria, Quantidade} = this.form.value;
    this.carroTratamento = new Carro(Marca, Modelo, Cor, Ano, Quilometragem, Preco, Categoria, Quantidade);

    this.carroService.cadastrar(this.carroTratamento).subscribe(
      carro => {
        this.carroCadastrado = true;
        this.messageService.showSuccess('Carro cadastrado com sucesso!')
        this.limparCampos();
        console.log(carro);
      },
      (error) => {
        this.messageService.showError('Erro ao Cadastrar o carro.');
        console.error(error);
      }
    );
  }

  atualizar(): void{
    if(this.form.invalid)
      return;

    console.log("atualizou");

    const {Marca, Modelo, Cor, Ano, Quilometragem, Preco, Categoria, Quantidade} = this.form.value;
    this.carroTratamento = {
      id: this.carroId,
      marca: Marca,
      modelo: Modelo,
      cor: Cor,
      anoFabricacao: Ano,
      quilometragem: Quilometragem,
      preco: Preco,
      categoria: Categoria,
      qtdDisponivel: Quantidade
    };

    console.log(this.carroTratamento);
    this.carroService.atualizar(this.carroTratamento).subscribe(carro => {
      this.carroAtualizado = true;
      this.messageService.showSuccess('Carro atualizado com sucesso!')
      this.limparCampos();
    })
  }

  private limparCampos(): void {
    this.carroTratamento = new Carro('','','','','',0,'',0,'');
  }

}
