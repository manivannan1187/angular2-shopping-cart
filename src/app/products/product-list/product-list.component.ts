import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductItemComponent } from "./product-item.component";
import { ProductService } from "../product.service";

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
  productList: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productList = this.productService.getProducts();
  }

}
