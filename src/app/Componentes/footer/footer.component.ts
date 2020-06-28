import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redes = [
    {red:"Facebook",icon:"fa fa-facebook",link:"https://www.facebook.com"},
    {red:"Instagram",icon:"fa fa-instagram",link:"https://www.instagram.com"},
    {red:"Twitter",icon:"fa fa-twitter",link:"https://www.twitter.com"},
    {red:"Youtube",icon:"fa fa-youtube",link:"https://www.youtube.com"},
  ];

  schedules = [
    {day:"Monday: ",hour:"8:00 am - 5:00 pm"},
    {day:"Tuesday: ",hour:"8:00 am - 5:00 pm"},
    {day:"Wednesday: ",hour:"8:00 am - 5:00 pm"},
    {day:"Thursday: ",hour:"8:00 am - 5:00 pm"},
    {day:"Friday: ",hour:"8:00 am - 5:00 pm"},
    {day:"Saturday: ",hour:"8:00 am - 12:00 pm"},
    {day:"Sunday: ",hour:"8:00 am - 12:00 pm"}
  ];

}
