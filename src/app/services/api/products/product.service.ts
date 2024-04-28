import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://fakestoreapi.com/'

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<ProductRepresentation[]>(`${this.baseUrl}products`)
  }

  getAllCategories() {
    return this.http.get<string[]>(`${this.baseUrl}products/categories`)
  }

  getProductById(id: number) {
    return this.http.get<ProductRepresentation>(`${this.baseUrl}products/${id}`)
  }

}
