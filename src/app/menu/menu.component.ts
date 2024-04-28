import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  categories: string[] = [];

  ngOnInit() {
    this.productService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onMenuClick(category: string) {
    this.router.navigate(['/category', category])
  }

}
