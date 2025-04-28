import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.scss'],
})
export class DetailsProduitComponent implements OnInit {
  productId?: number;
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.productId = +params['id'];
    });
  }
}
