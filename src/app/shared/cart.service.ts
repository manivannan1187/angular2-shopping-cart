/**
 * Created by sergik on 04.08.16.
 */
import { Injectable } from '@angular/core';
import {ProductList} from "../cart/cart";


@Injectable()
export class CartService {

  private cartList:ProductList[] = [];

  constructor() { }

  getCart() {
    return this.cartList;
  }
  addToCart(product) {
    let qty:number = 1;
    if (this.cartList.length == 0) {
      this.cartList.push(new ProductList(product.name, product.price, product.imagePath, qty));
    } else {
      for(let i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].name == product.name) {
          this.cartList[i].qty++;
          return true;
        };
      }
      this.cartList.push(new ProductList(product.name, product.price, product.imagePath, qty));
    }
  }

  deleteGoods(item) {
    this.cartList.splice(this.cartList.indexOf(item), 1);
  }
  editQty(value, i) {
    this.cartList[i].qty = +value;
  }
}

