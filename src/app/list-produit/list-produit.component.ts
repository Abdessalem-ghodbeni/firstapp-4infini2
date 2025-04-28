import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss'],
})
export class ListProduitComponent {
  constructor(private router: Router) {}
  goDetails(id: number) {
    this.router.navigate(['/produit-details', id]);
  }

  products: any[] = [
    {
      id: 1,
      name: 'Ordinateur Portable',
      price: 899.99,
      category: 'Informatique',
    },
    { id: 2, name: 'Smartphone', price: 599.99, category: 'Mobile' },
    { id: 3, name: 'Casque Bluetooth', price: 149.99, category: 'Audio' },
  ];
}
