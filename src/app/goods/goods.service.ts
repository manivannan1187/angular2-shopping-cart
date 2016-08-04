import { Injectable } from '@angular/core';
import { Goods } from './goods';

@Injectable()
export class GoodsService {
  private goodsList: Goods[] = [
    new Goods('product1', 100.00, 'Lorem1 Ipsum is simply dummy text of the printing and typesetting industry.', 'http://www.novelupdates.com/img/noimagefound.jpg'),
    new Goods('product2', 200.00, 'Lorem2 Ipsum is simply dummy text of the printing and typesetting industry.', 'http://www.novelupdates.com/img/noimagefound.jpg'),
    new Goods('product3', 300.00, 'Lorem3 Ipsum is simply dummy text of the printing and typesetting industry.', 'http://www.novelupdates.com/img/noimagefound.jpg'),
    new Goods('product4', 400.00, 'Lorem4 Ipsum is simply dummy text of the printing and typesetting industry.', 'http://www.novelupdates.com/img/noimagefound.jpg')
  ];

  constructor() { }

  getGoods() {
    return this.goodsList;
  }
  getGoodsItem(id: number) {
    return this.goodsList[id];
  }
}
