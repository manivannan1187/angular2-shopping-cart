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
  addToCart(item) {
    let qty:number = 1;
    if (this.cartList.length == 0) {
      this.cartList.push(new ProductList(item.name, item.price, item.imagePath, qty));
    } else {
      this.cartList = this.cartList.filter((it, i) => {
        if (this.cartList[i].name == item.name) {
          qty = this.cartList[i].qty + 1;
        };
        return this.cartList[i].name !== item.name;
      });
      this.cartList.push(new ProductList(item.name, item.price, item.imagePath, qty));
    }
  }

  deleteGoods(item) {
    this.cartList.splice(this.cartList.indexOf(item), 1);
  }
  editQty(value, i) {
    this.cartList[i].qty = +value;
  }
}
