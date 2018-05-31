import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    { src: 'assets/images/marbel1.jpg', name: 'marbel1' },
    { src: 'assets/images/marbel2.jpg', name: 'marbel2' },
    { src: 'assets/images/marbel3.jpg', name: 'marbel3' },
    { src: 'assets/images/marbel4.jpg', name: 'marbel4' },
    { src: 'assets/images/marbel5.jpg', name: 'marbel5' },
    { src: 'assets/images/marbel6.jpg', name: 'marbel6' },
    { src: 'assets/images/marbel7.jpg', name: 'marbel7' },
    { src: 'assets/images/marbel8.jpg', name: 'marbel8' }
  ];
  gridEnabled;
  marbelName;
  marbelSrc;
  variable = 'marbel1';
  ifHoverOver = false;
  constructor() {}

  ngOnInit() {
    this.gridEnabled = true;
  }

  imageClicked(image) {
    this.gridEnabled = false;
    this.marbelSrc = image.src;
    this.marbelName = image.name;
  }

  backClicked() {
    this.gridEnabled = true;
  }

  mouseEnter(image) {
    this.ifHoverOver = true;
    this.marbelName = image.name;
    this.marbelSrc = image.src;
  }

  mouseLeave() {
    this.ifHoverOver = false;
  }

  hoverOver(image) {
    if (this.ifHoverOver && image.src === this.marbelSrc ) {
      return true;
    } else {
      return false;
    }
  }
}
