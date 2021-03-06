import { Injectable } from '@angular/core';
import { analytics } from 'firebase';
import { LoginService } from "./firebase/login.service";
import { PutgetService } from "./firebase/putget.service";
import { RegistroService } from "./firebase/registro.service";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( private login:LoginService,private putget:PutgetService, private registrar:RegistroService) {

  }


  registrarUser(email: string, password: string){
    return this.registrar.register(email,password);
  }

  loginUser(email: string, password: string){
    return this.login.login(email,password);
  }
  getColeccionUser(tipo:string){
    return this.putget.getUsersCol(tipo);
  }
  getColeccion(tipo:string,coleccion?:string,parametro?:string,queBusca?:string){
    if(parametro){
      return this.putget.where(tipo,queBusca,parametro);
    }else{
      console.log("llega aca");



      if (tipo=="todos"){
        return this.putget.getTodos()
      }
      else{
        return this.putget.get(coleccion);}
    }

  }

  putDatos(objeto, coleccion:string){
    this.putget.put(objeto,coleccion);
  }

   async getUser(){


    return await this.login.retornaremail();

  }
  logout(){
    this.login.logOut();
  }
}
