import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class NavegaGuardGuard implements CanActivate {
  constructor(
    private _angularFireAuth:AngularFireAuth,
    private _router:Router
  ){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._angularFireAuth.authState.pipe(
        map((auth)=>{
          if(auth){
            console.log(auth);
            return true;
          }
          else{
            this._router.navigate(["/Login"]);
            return false;
          }
        })
      );
  }

}
