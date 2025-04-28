import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { AnnonceComponent } from './annonce.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    AnnonceComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ]
})
export class AnnonceModule { }
