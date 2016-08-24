import { Component, OnInit } from '@angular/core';
import {CartService} from "./cart.service";

@Component({
  selector: 'ct-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit {
  cartList = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartList = this.cartService.getCart();
    console.log(this.cartList);
  }
  getTotalPrice() {
    let total = 0;
    this.cartList.forEach((product: any, i:number) => {
      total += product.price * product.qty;
    })
    return total;
  }
}
