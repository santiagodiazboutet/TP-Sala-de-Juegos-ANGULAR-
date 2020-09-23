import { Injectable } from '@angular/core';
import { AngularFirestore, Query, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class PutgetService {

  constructor(
    private _angularFirestore:AngularFirestore,
    private _angularFireAuth:AngularFireAuth,
    ) {

    };
    //trae todos los elemntos de una colleccion
    get(coleccion?:string){
      return (this._angularFirestore.collection(coleccion, ref => ref.orderBy('date'))
      .valueChanges());
    }
    //pone un objeto en una coleccion
    put(objeto,coleccion?:string){
      this._angularFirestore
              .collection(coleccion)
              .add(objeto);
      this._angularFirestore
              .collection(objeto.jugador)
              .add(objeto);
    }

    //trae objetos que coincidan con parametros de busqueda en una coleccion
    where(coleccion?:string,query?:string,parametro?:string){
      return (this._angularFirestore.collection(coleccion, ref => ref.orderBy('date').where(parametro, "==", query))
      .valueChanges());
    }

}
