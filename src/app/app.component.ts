import { Component, OnInit } from '@angular/core';

import * as alertify from 'alertifyjs';
import * as AOS from 'aos';

import swal from 'sweetalert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Flooring-Services';
  loaded=true;


  ngOnInit(){
    AOS.init({
      offset: 100,
      duration: 2500,
      easing: 'fade-up',
      delay: 500,
    });


    window.addEventListener('load', ()=>{
      this.cargar();
    });


  }

  cargar(){
    setTimeout(()=>{
      this.loaded = false;
    },5000);
  }
}
