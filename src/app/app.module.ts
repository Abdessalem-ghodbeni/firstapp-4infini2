import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HeaderComponent } from './header/header.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AnnonceModule } from './annonce/annonce.module';
import { AddResidenceComponent } from './add-residence/add-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundPageComponent,
    HeaderComponent,
    ListProduitComponent,
    DetailsProduitComponent,
    ResidenceComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
  ],
  imports: [BrowserModule, AnnonceModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
