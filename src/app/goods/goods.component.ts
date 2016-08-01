import { Component, OnInit } from '@angular/core';
import { GoodsListComponent } from './goods-list/';

@Component({
  moduleId: module.id,
  selector: 'sc-goods',
  templateUrl: 'goods.component.html',
  directives: [GoodsListComponent]
})
export class GoodsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
