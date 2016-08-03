import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

import { GoodsListComponent } from './goods-list/';
import {Goods} from "./goods";

@Component({
  moduleId: module.id,
  selector: 'sc-goods',
  templateUrl: 'goods.component.html',
  directives: [
    GoodsListComponent,
    ROUTER_DIRECTIVES

  ]
})
export class GoodsComponent {

}
