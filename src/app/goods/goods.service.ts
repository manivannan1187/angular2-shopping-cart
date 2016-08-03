import { Injectable } from '@angular/core';
import { Goods } from './goods';

@Injectable()
export class GoodsService {
  private goodsList: Goods[] = [
    new Goods('bread','lorem ipsum', 'http://properdiet.ru/userfiles/images/produkti-dlya-genshin5.jpg'),
    new Goods('meat','lorem ipsum', 'http://www.vnd12.ru/uploads/posts/2016-02/1456399849_93.jpg')
  ];
  constructor() { }

  getGoods() {
    return this.goodsList;
  }
  getGoodsItem(id: number) {
    return this.goodsList[id];
  }
}
