import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  products: ProductRepresentation[] = [];

  ngOnInit() {

    const response = this.productService.getAllProducts();

    response.subscribe((data) => {
      this.products = data;
    });
  }

  onProductClick(productId: number) {
      this.router.navigate(['/products', productId]);
  }

}
