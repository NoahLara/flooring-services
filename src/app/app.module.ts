import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragScrollModule } from 'ngx-drag-scroll';

//Material Design
import { MaterialModule } from './Material/material/material.module';

//Componentes
import { HomeComponent } from './Componentes/home/home.component';
import { AboutComponent } from './Componentes/about/about.component';
import { ServicesComponent } from './Componentes/services/services.component';
import { TestimonyComponent } from './Componentes/testimony/testimony.component';
import { ContactComponent } from './Componentes/contact/contact.component';
import { Error404Component } from './Componentes/error404/error404.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { LogoComponent } from './Componentes/logo/logo.component';
import { LlamadaComponent } from './Componentes/llamada/llamada.component';
import { FlooringComponent } from './Componentes/services/flooring/flooring.component';
import { PaintingComponent } from './Componentes/services/painting/painting.component';
import { CleaningComponent } from './Componentes/services/cleaning/cleaning.component';
import { AtrasComponent } from './Componentes/services/atras/atras.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TestimonyComponent,
    ContactComponent,
    Error404Component,
    MenuComponent,
    FooterComponent,
    LogoComponent,
    LlamadaComponent,
    FlooringComponent,
    PaintingComponent,
    CleaningComponent,
    AtrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragScrollModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
