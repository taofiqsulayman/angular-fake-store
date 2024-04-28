import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  products: ProductRepresentation[] = [];

  ngOnInit() {

    const response = this.productService.getAllProducts();

    response.subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }

}
