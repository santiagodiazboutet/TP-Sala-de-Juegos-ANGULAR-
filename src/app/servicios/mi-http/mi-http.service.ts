import { log } from 'util';
import { Injectable } from '@angular/core';

import { HttpClient,HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MiHttpService {

  constructor( public http: HttpClient ) { }

  public httpGetP ( url: string)
  {
    return this.http
    .get( url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .get( url )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }

  public httpGetO ( url: string): Observable<HttpResponse<any>>
  {
    return this.http.get( url )
      .map( ( res: HttpResponse<any> ) => res.body())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData ( res: HttpResponse<any> )
  {
    return res.body() || {};
  }

  private handleError ( error: HttpResponse<any> | any )
  {
    return error;
  }
}
