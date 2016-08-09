import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {Product} from "../product";
import {ProductService} from "../product.service";
import {CartService} from "../../shared/cart.service";

@Component({
  moduleId: module.id,
  selector: 'sc-goods-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css'],
  directives: [
    MdIcon,
    MdButton,
    MD_CARD_DIRECTIVES
  ],
  providers: [ MdIconRegistry ]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  selectedProduct: Product;
  private productIndex: number;
  private subsctiption: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService,
              public cartService: CartService
  ) { }

  ngOnInit() {
    this.subsctiption = this.route.params.subscribe(
      (params: any) => {
        this.productIndex = params['id'];
        this.selectedProduct = this.productService.getProductItem(this.productIndex);
        console.log(this.selectedProduct);
      }
    )
  }
  ngOnDestroy() {
    this.subsctiption.unsubscribe();
  }

}
