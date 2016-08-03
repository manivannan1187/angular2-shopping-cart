import { Component, Input } from '@angular/core';

import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import { Goods } from '../goods';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'sc-goods-item',
  templateUrl: 'goods-item.component.html',
  styleUrls: ['goods-item.component.css'],
  directives: [
    MdIcon,
    MdButton,
    MD_CARD_DIRECTIVES,
    ROUTER_DIRECTIVES
  ],
  providers: [ MdIconRegistry ]
})
export class GoodsItemComponent {
  @Input() goods: Goods;
  @Input() goodsId: number;


}
