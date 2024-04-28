import { Component, Input } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input()
  products: ProductRepresentation[] = [];

  constructor(private router: Router) { }

  onProductClick(productId: number) {
      this.router.navigate(['/products', productId]);
  }

}
