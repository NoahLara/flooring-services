import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import swal from 'sweetalert';

@Component({
  selector: 'bb-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();

    setTimeout(()=>{
      swal({
        text: "We are costumers too, it means that we know what you need",
        icon: "success"
      });
    },3000);
  }

}
