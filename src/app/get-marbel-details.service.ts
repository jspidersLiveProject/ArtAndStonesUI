import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetMarbelDetailsService {

  constructor(private http: HttpClient) { }


  getMarbelDetals(marbelName: string) {
    return this.http.post('http://localhost:8080/aas/getMarbelDetails/', {
      'commonRequest' : {
        'trasactionId' : 'getmarbeldetails : 16JUne',
        'userName' : 'Admin',
        'passWord' : 'Passowrd'
      },
      'marbelName' : marbelName
    });
  }
}
