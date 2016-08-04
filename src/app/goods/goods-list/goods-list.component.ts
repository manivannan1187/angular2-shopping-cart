import { Component, OnInit } from '@angular/core';

import { Goods } from '../goods';
import {GoodsItemComponent} from "./goods-item.component";
import {GoodsService} from "../goods.service";

@Component({
  moduleId: module.id,
  selector: 'sc-goods-list',
  templateUrl: 'goods-list.component.html',
  styleUrls: ['goods-list.component.css'],
  directives: [
    GoodsItemComponent
  ]
})
export class GoodsListComponent implements OnInit {
  goodsList: Goods[] = [];
  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    this.goodsList = this.goodsService.getGoods();
  }

}
