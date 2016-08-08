import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

import { HeaderComponent } from './header.component';
import {GoodsService} from "./goods/goods.service";
import {CartService} from "./shared/cart.service";

@Component({
  moduleId: module.id,
  selector: 'sc-root',
  templateUrl: 'catalog.component.html',
  styleUrls: ['catalog.component.css'],
  directives: [
    HeaderComponent,
    ROUTER_DIRECTIVES
  ],
  providers: [
    GoodsService,
    CartService
  ]
})
export class CatalogComponent {
}
