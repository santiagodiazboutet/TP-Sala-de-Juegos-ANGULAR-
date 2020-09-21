import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _angularFireAuth:AngularFireAuth) {
  }

  login(email:string,password:string):Promise<any>{
    return this._angularFireAuth.signInWithEmailAndPassword(
      email,password);
  }


}
