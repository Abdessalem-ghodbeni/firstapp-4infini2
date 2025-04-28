import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce.component';
import { HomeComponent } from '../home/home.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: 'annonce',
    component: AnnonceComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'add', component: AddComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnonceRoutingModule {}
