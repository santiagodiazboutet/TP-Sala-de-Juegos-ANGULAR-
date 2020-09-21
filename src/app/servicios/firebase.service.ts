import { Injectable } from '@angular/core';
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

  getColeccion(tipo:string,parametro?:string,queBusca?:string){
    if(parametro){
      return this.putget.where(tipo,queBusca,parametro);
    }else{
      return this.putget.get(tipo);
    }

  }

  putDatos(objeto, coleccion:string){
    this.putget.put(objeto,coleccion);
  }


}
