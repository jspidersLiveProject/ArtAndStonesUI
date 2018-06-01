import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {
  @Input() example;

  name  : string;
  constructor() {
    console.log(this.example);
  }

  ngOnInit() {
    console.log(this.example);
  }
}
