import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Carro } from "../model/carro";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CarroService {
    carroAPI = 'http://localhost:8080/carros';

    constructor(private httpClient: HttpClient) {}

    listar(): Observable<Carro[]> {
        return this.httpClient.get<Carro[]>(this.carroAPI);
    }

    cadastrar(carro: Carro): Observable<Carro> {
        return this.httpClient.post<Carro>(this.carroAPI, carro);
    }

    remover(carro: Carro): Observable<any> {
        return this.httpClient.delete<Carro>(`${this.carroAPI}/${carro.id}`);
    }

    atualizar(carro: Carro): Observable<Carro> {
        return this.httpClient.put<Carro>(`${this.carroAPI}/${carro.id}`, carro);
    }

    pesquisarId(id: string): Observable<Carro> {
        return this.httpClient.get<Carro>(`${this.carroAPI}/${id}`)
    }

    pesquisarModelo(modelo: string): Observable<Carro[]> {
        return this.httpClient.get<Carro[]>(`${this.carroAPI}/${modelo}`)
    }

}


