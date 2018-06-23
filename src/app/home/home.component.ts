import { Component, OnInit } from '@angular/core';
import { GetMarbelDetailsService } from '../get-marbel-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    { src: 'assets/images/marbel1.jpg', name: 'Marbel1' },
    { src: 'assets/images/marbel2.jpg', name: 'Marbel2' },
    { src: 'assets/images/marbel3.jpg', name: 'Marbel3' },
    { src: 'assets/images/marbel4.jpg', name: 'Marbel4' },
    { src: 'assets/images/marbel5.jpg', name: 'Marbel5' },
    { src: 'assets/images/marbel6.jpg', name: 'Marbel6' },
    { src: 'assets/images/marbel7.jpg', name: 'Marbel7' },
    { src: 'assets/images/marbel8.jpg', name: 'Marbel8' }
  ];
  gridEnabled;
  marbelName;
  marbelSrc;
  variable = 'marbel1';
  type;
  price;
  desc;
  ifHoverOver = false;
  constructor(private getMarbelDetailsService: GetMarbelDetailsService) {}

  ngOnInit() {
    this.gridEnabled = true;
  }

  imageClicked(image) {
    this.getMarbelDetailsService.getMarbelDetals(image.name).subscribe(
      res => {
        console.log('Success', res);
        this.type  = res.type;
        this.price = res.price;
        this.desc = res.description;
        this.gridEnabled = false;
        this.marbelSrc = image.src;
        this.marbelName = image.name;
      },
      err => {
        console.log('Failure');
      }
    );
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
    if (this.ifHoverOver && image.src === this.marbelSrc) {
      return true;
    } else {
      return false;
    }
  }
}
