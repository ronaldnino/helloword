import { Injectable } from '@angular/core';


@Injectable()
export class Storage  {
  public token: string;
  public apiUrl: string;
  public data: any;
  

  constructor() {
     this.apiUrl = 'https://dev.tuten.cl/TutenREST/rest';
  }


}
