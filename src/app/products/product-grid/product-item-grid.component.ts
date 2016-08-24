import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../shared/product";
import {CartService} from "../../cart/cart.service";

@Component({
  selector: 'ct-product-item-grid',
  templateUrl: 'product-item-grid.component.html',
  styleUrls: ['product-item-grid.component.css']
})
export class ProductItemGridComponent implements OnInit {

  @Input() product: Product;
  @Input() productId: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}
