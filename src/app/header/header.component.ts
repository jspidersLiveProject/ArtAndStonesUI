import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  features = ['Home', 'Blog', 'About Us', 'Services', 'Contact Us'];
  constructor(private router: Router) { }

  ngOnInit() {
  }


  buttonClicked(feature) {
    const tab: string = '/' + feature;
    this.router.navigate([tab], { skipLocationChange: true });
  }
}
