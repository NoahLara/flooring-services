import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'bb-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }


  testimonios = [
    {
      Nombre:"Krissia Courtain",
      Servicio:"Flooring",
      Img:"../../../assets/testimonio1.jpg",
      Testimonio:'"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."'
    },
    {
      Nombre:"Brayan Hilmore",
      Servicio:"Painting",
      Img:"../../../assets/testimonio2.jpg",
      Testimonio:'"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."'
    },
    {
      Nombre:"Robert Vasquez",
      Servicio:"Flooring",
      Img:"../../../assets/testimonio3.jpg",
      Testimonio:'"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."'
    },
    {
      Nombre:"Company 1",
      Servicio:"Flooring",
      Img:"../../../assets/testimonio4.jpg",
      Testimonio:'"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."'
    },
    {
      Nombre:"Company 2",
      Servicio:"Cleaning",
      Img:"../../../assets/testimonio5.jpg",
      Testimonio:'"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."'
    },
    {
      Nombre:"Krissia Courtain",
      Servicio:"Flooring",
      Img:"../../../assets/testimonio1.jpg",
      Testimonio:'"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."'
    },
    {
      Nombre:"Brayan Hilmore",
      Servicio:"Painting",
      Img:"../../../assets/testimonio2.jpg",
      Testimonio:'"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."'
    },
    {
      Nombre:"Robert Vasquez",
      Servicio:"Flooring",
      Img:"../../../assets/testimonio3.jpg",
      Testimonio:'"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."'
    },
    {
      Nombre:"Company 1",
      Servicio:"Flooring",
      Img:"../../../assets/testimonio4.jpg",
      Testimonio:'"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."'
    },
    {
      Nombre:"Company 2",
      Servicio:"Cleaning",
      Img:"../../../assets/testimonio5.jpg",
      Testimonio:'"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."'
    }
  ];

}
