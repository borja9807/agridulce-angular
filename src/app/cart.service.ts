import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class CartService {
  cart: any[] = [];
  cartTotal: number = 0;

  constructor() {}

  updateCartTotal(total: number) {
    this.cartTotal = total;
  }
}
