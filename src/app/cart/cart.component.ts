import { Component, OnInit } from '@angular/core';
import {CartService} from "../shared/cart.service";
import {CartItemComponent} from "./cart-item.component";

@Component({
  moduleId: module.id,
  selector: 'sc-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
  directives: [
    CartItemComponent
  ]
})
export class CartComponent implements OnInit {
  cartList = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartList = this.cartService.getCart();
    console.log(this.cartList);
  }

}
