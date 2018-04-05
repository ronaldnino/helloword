import { Injectable } from '@angular/core';


@Injectable()
export class Storage  {
  public token: string;
  public apiUrl: string;
  

  constructor() {
     this.token = '';
     this.apiUrl = 'https://dev.tuten.cl/TutenREST/rest'
     
  }


}
