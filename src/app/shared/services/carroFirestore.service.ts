import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import { Carro } from './../model/carro';


@Injectable({
 providedIn: 'root'
})
export class CarroFirestoreService {


 colecaoCarros: AngularFirestoreCollection<Carro>;
 NOME_COLECAO = 'carros';


 constructor(private afs: AngularFirestore) {
   this.colecaoCarros = afs.collection(this.NOME_COLECAO);
 }


 listar(): Observable<Carro[]> {
   return this.colecaoCarros.valueChanges({idField: 'id'});
 }


 inserir(carro: Carro): Observable<object> {
   delete carro.id;
return from(this.colecaoCarros.add(Object.assign({}, carro)));
}


apagar(id: string): Observable<void> {
  return from(this.colecaoCarros.doc(id).delete());
}


pesquisarPorId(id: string): Observable<Carro> {
    return this.colecaoCarros.doc(id).get().pipe(
      map(document => {
        const data = document.data() as Carro;
        return { ...data, id };
      })
    );
  }


atualizar(carro: Carro): Observable<void> {
const id = carro.id;
delete carro.id;
return from(this.colecaoCarros.doc(id).update(Object.assign({}, carro)));

}


}
