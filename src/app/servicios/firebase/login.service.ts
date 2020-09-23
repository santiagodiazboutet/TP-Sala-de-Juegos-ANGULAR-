import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

      constructor(private firebaseAuth: AngularFireAuth, private router:Router) {
        console.log("Hola");
        this.user= firebaseAuth.authState;
        this.user.subscribe((user) => {
          if (user) {
            console.log("entro");
            this.userDetails = user;
          }
          else {
            this.userDetails = null;
          }
       });
      }

        // Returns true if user is logged in
    get authenticated(): boolean {
      // consider changing to 'return this.userDetails != null'
        if (this.userDetails == null ) {
          return false;
        } else {
          return true;
        }
      }


      // Returns current user display name or Guest
      get currentUserDisplayName(): string {
        return this.authenticated?  this.userDetails.email: '';
      }


      login(email:string,password:string):Promise<any>{
        return this.firebaseAuth.signInWithEmailAndPassword(
          email,password);
      }
      async retornaremail(){

        return  this.currentUserDisplayName;

      }
      async logOut(){
        this.firebaseAuth.signOut().then((val)=>{
          console.log(val);
          this.router.navigateByUrl("/Principal")
        }).catch((error)=>{
          console.log(error);
        })
      }

}
