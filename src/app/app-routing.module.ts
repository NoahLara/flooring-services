import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { FlooringComponent } from './Componentes/services/flooring/flooring.component';
import { CleaningComponent } from './Componentes/services/cleaning/cleaning.component';
import { PaintingComponent } from './Componentes/services/painting/painting.component';
import { Error404Component } from './Componentes/error404/error404.component';
import { HomeComponent } from './Componentes/home/home.component';
import { AboutComponent } from './Componentes/about/about.component';
import { ServicesComponent } from './Componentes/services/services.component';
import { TestimonyComponent } from './Componentes/testimony/testimony.component';
import { ContactComponent } from './Componentes/contact/contact.component';


 const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about-us',
    component:AboutComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'reviews',
    component:TestimonyComponent
  },
  {
    path:'contact-us',
    component:ContactComponent
  },
  {
    path:'flooring',
    component:FlooringComponent
  },
  {
    path:'cleaning',
    component:CleaningComponent
  },
  {
    path:'painting',
    component:PaintingComponent
  },
  {
    path:'404',
    component:Error404Component
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
