import { Component, OnInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import { Goods } from '../goods';
import {GoodsItemComponent} from "./goods-item.component";

@Component({
  moduleId: module.id,
  selector: 'sc-goods-list',
  templateUrl: 'goods-list.component.html',
  styleUrls: ['goods-list.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    GoodsItemComponent
  ]
})
export class GoodsListComponent implements OnInit {
  goodsList: Goods[] = [];
  goods = new Goods('bread','lorem ipsum', 'http://properdiet.ru/userfiles/images/produkti-dlya-genshin5.jpg');
  constructor() { }

  ngOnInit() {
  }

}
