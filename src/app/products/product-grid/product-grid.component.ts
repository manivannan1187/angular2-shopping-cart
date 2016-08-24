import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product";
import {ProductService} from "../../shared/product.service";


@Component({
  selector: 'ct-product-grid',
  templateUrl: 'product-grid.component.html',
  styleUrls: ['product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  productList: Product[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productList = this.productService.getProducts();
  }

}
