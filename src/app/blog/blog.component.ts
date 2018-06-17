import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  hide = true;
  constructor() {}

  ngOnInit() {}
}
