import { Inject, Injectable } from '@angular/core';
import { Product } from './product';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shipping } from './shipping';

import { APP_BASE_HREF } from '@angular/common'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(
    @Inject(APP_BASE_HREF) private baseHref: string,
    private http: HttpClient,
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
    return this.http.get<Shipping>(this.baseHref + '/assets/shipping.json');
  }
}
