import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductItemComponent } from "./product-item.component";
import { GoodsService } from "../goods.service";

@Component({
  moduleId: module.id,
  selector: 'ct-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css'],
  directives: [
    ProductItemComponent
  ]
})
export class ProductListComponent implements OnInit {
  goodsList: Product[] = [];
  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    this.goodsList = this.goodsService.getGoods();
  }

}
