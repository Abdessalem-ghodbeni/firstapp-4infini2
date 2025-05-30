import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.scss'],
})
export class ResidenceComponent {
  search: string = '';
  favoriteResidences: Residence[] = [];
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
      status: 'Disponible',
      addressEtat: false,
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
      status: 'Disponible',
      addressEtat: false,
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
      status: 'Vendu',
      addressEtat: false,
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R4.jpg',
      status: 'En Construction',
      addressEtat: false,
    },
  ];

  showLocation(id: number) {
    for (let i = 0; i < this.listResidences.length; i++) {
      if (this.listResidences[i].id == id) {
        this.listResidences[i].addressEtat = true;
        if (this.listResidences[i].address == 'inconnu') {
          alert('Address is unknown!!');
        }
      }
    }
  }

  addToFavoriteList(residence: Residence) {
    this.favoriteResidences.push(residence);
  }
}
