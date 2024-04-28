import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) { }

  param: any;

  product: ProductRepresentation = {};

  ngOnInit() {
    const productId = this.activatedRoute.snapshot.params['id'];

    const response = this.productService.getProductById(productId);

    response.subscribe((data) => {
      this.product = data;
    });

  }

}
