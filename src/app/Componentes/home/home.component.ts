import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'bb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  scroll:number=0;

  ngOnInit(): void {
    
    this.cambiarText();

    AOS.init();
  }

  cambio:boolean=false;

  cambiarText(){
    setTimeout(()=>{
      this.cambio=true;
    },3000);
  }

  servicios = [
    {nombre:"Flooring",icon:"layers",link:"flooring"},
    {nombre:"Painting",icon:"format_paint",link:"painting"},
    {nombre:"Comercial Cleaning Services",icon:"electric_moped",link:"cleaning"}
  ];

}
