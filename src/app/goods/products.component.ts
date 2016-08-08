import { Component } from '@angular/core';

import { ProductListComponent } from './goods-list/';

@Component({
  moduleId: module.id,
  selector: 'ct-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
  directives: [
    ProductListComponent

  ]
})
export class ProductsComponent {

}
