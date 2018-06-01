import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  imageMarbles = { src: 'assets/images/glassMarbles.jpg' };

  constructor() { }

  ngOnInit() {

  }

}
