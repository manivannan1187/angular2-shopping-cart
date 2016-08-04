/**
 * Created by sergik on 04.08.16.
 */
import { Injectable } from '@angular/core';


@Injectable()
export class CartService {

  private cartList = [];
  constructor() { }

  getCart() {
    return this.cartList;
  }
  addToCart(item) {
    this.cartList.push(item);
    console.log(this.cartList);
    return this.cartList;
  }
}
