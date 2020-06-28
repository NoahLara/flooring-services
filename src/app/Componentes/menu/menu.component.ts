import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';
import { Event } from '@angular/router';
import * as AOS from "aos"; 

@Component({
  selector: 'bb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  constructor() { }


  opcionesMenu = [
    {opcion:"Home",icon:"house",redireccion:""},
    {opcion:"About Us",icon:"people",redireccion:"about-us"},
    {opcion:"Services",icon:"construction",redireccion:"services"},
    {opcion:"Reviews",icon:"feedback",redireccion:"reviews"},
    {opcion:"Contact Us",icon:"near_me",redireccion:"contact-us"}
  ]
 

  ancho:number=window.screen.width;

  show:boolean=false;

  ngOnInit(): void {
    AOS.init();
  }


  showMenu(){
    this.show == true 
      ? this.show = false 
      : this.show==false 
        ? this.show=true 
        : this.show=this.show;
  }
}
