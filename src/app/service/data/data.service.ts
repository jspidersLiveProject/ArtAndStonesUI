import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  marbels = ['a', 'b', 'c'];


  myData() {
    return 'hello';
  }
}
