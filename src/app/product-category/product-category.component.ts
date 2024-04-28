import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.scss'
})
export class ProductCategoryComponent implements OnInit{

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  products: ProductRepresentation[] = [];
  loading = true;
  category: string = this.route.snapshot.params['category'];

  ngOnInit() {
    const response = this.productService.getProductsByCategory(this.category);

    response.subscribe((data) => {
      this.products = data;
      this.loading = false;
    });
  }

}
