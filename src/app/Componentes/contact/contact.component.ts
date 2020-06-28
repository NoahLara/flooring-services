import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms';
import * as alertify from 'alertifyjs';
import '../../../assets/smtp.js';
import Swal from 'sweetalert';
import * as AOS from 'aos';
declare let Email:any;

@Component({
  selector: 'bb-contact-us',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private builder: FormBuilder ) { }

  ngOnInit(): void {
    AOS.init();

    setTimeout(()=>{
      Swal({
        text:"CALL US RIGHT NOW!",
        icon:"info"
      })
    },2000); 
  }
  isDisabled:boolean=true;

  contactForm = this.builder.group({
    nameContact : this.builder.control('',Validators.required),
    phoneContact : this.builder.control('',Validators.required),
    emailContact : this.builder.control('',Validators.required),
    motivoContact : this.builder.control('', Validators.required),
    mensajeContact : this.builder.control('', Validators.required)
  });


  nameContact(){
    return this.contactForm.get("nameContact");
  }
  phoneContact(){
    return this.contactForm.get("phoneContact");
  }
  emailContact(){
    return this.contactForm.get("emailContact");
  }
  motivoContact(){
    return this.contactForm.get("motivoContact");
  }
  mensajeContact(){
    return this.contactForm.get("mensajeContact");
  }

  enviarMensaje(){
      this.isDisabled=false;
      Email.send({
      Host : "smtp.elasticemail.com",
      Username : "abbeldn_07@hotmail.com",
      Password : "552E172079DD325C8186320284D6226C4F53",
      To : "abbeldn_07@hotmail.com",
      From : "abbeldn_07@hotmail.com",
      Subject : "Subject: "+ this.motivoContact().value,
      Body :"Email: "+ this.emailContact().value 
            + " || Telephone number: "+ this.phoneContact().value
            +" || Name: "+this.nameContact().value 
            + " || Explication: "+this.mensajeContact().value
      }).then(
        message => {
          if(message=="OK"){
            Swal({
              title: "Messsage has been sent successfully",
              text: "We are going to reply to you as far as we could.!",
              icon: "success"
            });
            this.contactForm.reset();
          }else{
            alertify.error("Error al enviar el mensaje. Error: "+message);
          }
        }  
    );
    this.isDisabled=true;
  }
}
