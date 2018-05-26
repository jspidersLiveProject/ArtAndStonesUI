import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  images = [ 'a','b','c','d','e',
            'a','b','c','d','e',
            'a','b','c','d','e',
            'a','b','c','d','e',
            'a','b','c','d','e'
          ]
  constructor() { }

  ngOnInit() {
  }

}
