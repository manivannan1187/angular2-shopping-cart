import { Component, Input } from '@angular/core';

import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import { Product } from '../product';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {CartService} from "../../shared/cart.service";

@Component({
  moduleId: module.id,
  selector: 'ct-product-item',
  templateUrl: 'product-item.component.html',
  styleUrls: ['product-item.component.css'],
  directives: [
    MdIcon,
    MdButton,
    MD_CARD_DIRECTIVES,
    ROUTER_DIRECTIVES
  ],
  providers: [ MdIconRegistry ]
})
export class ProductItemComponent {
  @Input() product: Product;
  @Input() goodsId: number;


  constructor(public cartService: CartService) {}


}
