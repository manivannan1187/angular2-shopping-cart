import { Component, OnInit, Input } from '@angular/core';

import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import { Goods } from '../goods';

@Component({
  moduleId: module.id,
  selector: 'sc-goods-item',
  templateUrl: 'goods-item.component.html',
  styleUrls: ['goods-item.component.css'],
  directives: [
    MdIcon,
    MdButton,
  ],
  providers: [ MdIconRegistry ]
})
export class GoodsItemComponent implements OnInit {
  @Input() goods: Goods;
  goodsId: number;

  constructor() { }

  ngOnInit() {
  }

}
