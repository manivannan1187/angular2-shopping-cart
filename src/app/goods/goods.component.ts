import { Component } from '@angular/core';

import { GoodsListComponent } from './goods-list/';

@Component({
  moduleId: module.id,
  selector: 'sc-goods',
  templateUrl: 'goods.component.html',
  styleUrls: ['goods.component.css'],
  directives: [
    GoodsListComponent

  ]
})
export class GoodsComponent {

}
