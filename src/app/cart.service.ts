import { Injectable } from '@angular/core';
import { Product } from './product';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipping } from './shipping';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<Shipping> {
    return this.http.get<Shipping>('/assets/shipping.json');
  }
}
