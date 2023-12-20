import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarroCadastroComponent } from "./carro-cadastro/carro-cadastro.component";
import { CarroListagemComponent } from "./carro-listagem/carro-listagem.component";
import { AlteracaoComponent } from './alteracao/alteracao.component';
import {MatTableModule} from "@angular/material/table";
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { FirestoreModule } from "../firestore/firestore.module";


@NgModule ({
    declarations: [
        AlteracaoComponent,
        CarroCadastroComponent,
        CarroListagemComponent
    ],
    
    imports: [
        CommonModule,
        MatTableModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        FirestoreModule

    ],

    exports: [
        AlteracaoComponent,
        CarroCadastroComponent,
        CarroListagemComponent,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule
    ]
})

export class CarroModule {}