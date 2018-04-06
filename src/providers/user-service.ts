import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Storage} from '../providers/storage';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(public http: Http,
              public storage: Storage) {}
    
  authentification(email: string, password:string): Observable<Response> { 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept','application/json');
      headers.append('Connection','keep-alive');
      headers.append('App','APP_WEB');
      headers.append('password',password);
      let options = new RequestOptions({ headers: headers });
      return this.http.put(this.storage.apiUrl + "/user/" + email,{}, options);
  }

}
