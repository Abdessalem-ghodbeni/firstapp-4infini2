import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { ResidenceComponent } from './residence/residence.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list-produit', component: ListProduitComponent },
  { path: 'residence', component: ResidenceComponent },
  { path: 'residence/add', component: AddResidenceComponent },
  { path: 'residence/details/:id', component: ResidenceDetailsComponent },
  { path: 'produit-details/:id', component: DetailsProduitComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
