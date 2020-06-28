import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'bb-about-us',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
