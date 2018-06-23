import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() name;
  @Output() chnagedName = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  chnageName(changeName) {
    console.log(changeName);
    this.chnagedName.emit(changeName);
  }

}
