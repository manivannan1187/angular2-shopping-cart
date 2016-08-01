import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { GoodsComponent } from './goods/';

@Component({
  moduleId: module.id,
  selector: 'sc-root',
  templateUrl: 'shopping-cart.component.html',
  directives: [
    HeaderComponent,
    GoodsComponent
  ]
})
export class ShoppingCartComponent {
}
