import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

import { HeaderComponent } from './header.component';
import {GoodsService} from "./goods/goods.service";

@Component({
  moduleId: module.id,
  selector: 'sc-root',
  templateUrl: 'shopping-cart.component.html',
  directives: [
    HeaderComponent,
    ROUTER_DIRECTIVES
  ],
  providers: [GoodsService]
})
export class ShoppingCartComponent {
}
