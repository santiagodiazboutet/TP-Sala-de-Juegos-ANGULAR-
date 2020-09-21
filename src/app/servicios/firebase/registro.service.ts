import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(public  afAuth:  AngularFireAuth) { }

  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return result;
}
}
