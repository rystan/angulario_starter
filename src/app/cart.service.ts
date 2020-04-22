import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShippingCost } from './shared/models/shipping-costs.interface';
import { Product } from './shared/models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<ShippingCost>('/assets/shipping.json');
  }
}
