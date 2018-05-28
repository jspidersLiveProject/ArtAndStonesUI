import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  features = ['Home', 'Blog', 'About Us', 'Services', 'Contact Us'];
  constructor() { }

  ngOnInit() {
  }

}
