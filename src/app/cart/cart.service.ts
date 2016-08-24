import { Injectable } from '@angular/core';
import {CartList} from "./cart-list";

@Injectable()
export class CartService {
  private cartList: CartList[] = [];

  constructor() { }

  getCart() {
    console.log(this.cartList);
    return this.cartList;
  }
  addToCart(product, qtyString:string = "1") {
    let qty = Number(qtyString);
    if (this.cartList.length == 0) {
      this.cartList.push(new CartList(product.name, product.price, product.imagePath, qty));
    } else {
      for (let i = 0; i < this.cartList.length; i++) {
        if (this.cartList[i].name == product.name) {
          this.cartList[i].qty += qty;
          return true;
        };
      }
      this.cartList.push(new CartList(product.name, product.price, product.imagePath, qty));
    }
  }
  deleteItem (item) {
    this.cartList.splice(this.cartList.indexOf(item), 1);
  }
  editQty(value, i) {
    this.cartList[i].qty = +value;
  }
}
