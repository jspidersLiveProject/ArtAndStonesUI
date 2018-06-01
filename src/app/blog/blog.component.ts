import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  name = 'vishnu';
  constructor() {}

  ngOnInit() {}

  consoleName(name) {
    console.log(name);
  }
}
