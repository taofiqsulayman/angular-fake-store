import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  products: ProductRepresentation[] = [];
  loading = true;
  category: string = '';

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        this.category = params['category'];
        if (this.category) {
          return this.productService.getProductsByCategory(this.category);
        } else {
          return this.productService.getAllProducts();
        }
      })
    ).subscribe((data) => {
      this.products = data;
      this.loading = false;
    });
  }

  onProductClick(productId: number) {
    this.router.navigate(['/products', productId]);
  }

}
