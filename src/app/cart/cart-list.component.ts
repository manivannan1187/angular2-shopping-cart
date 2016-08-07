import { Component, OnInit } from '@angular/core';

import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MdInput } from '@angular2-material/input';

import {CartService} from "../shared/cart.service";
import {CartItemComponent} from "./cart-item.component";

@Component({
  moduleId: module.id,
  selector: 'sc-cart-list',
  templateUrl: 'cart-list.component.html',
  styleUrls: ['cart-list.component.css'],
  directives: [
    MdIcon,
    MdButton,
    MdInput,
    CartItemComponent
  ],
  providers: [ MdIconRegistry ]
})
export class CartListComponent implements OnInit {
  cartList = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartList = this.cartService.getCart();
    console.log(this.cartList);
  }

}
