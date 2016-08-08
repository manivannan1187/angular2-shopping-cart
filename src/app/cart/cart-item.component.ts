import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../goods/product";

import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'sc-cart-item',
  templateUrl: 'cart-item.component.html',
  styleUrls: ['cart-item.component.css'],
  directives: [
    MdIcon,
    MdButton,
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES
  ],
  providers: [ MdIconRegistry ]
})
export class CartItemComponent implements OnInit {
  @Input() goods: Product;
  constructor() { }

  ngOnInit() {
  }

}
