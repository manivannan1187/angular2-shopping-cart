import { Component, OnInit, OnDestroy } from '@angular/core';
import {Product} from "../../shared/product";
import {Subscription} from "rxjs/Rx";
import {Router, ActivatedRoute} from "@angular/router";
import {ProductService} from "../../shared/product.service";
import {CartService} from "../../cart/cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  selectedProduct: Product;
  private productIndex: number;
  private subsctiption: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.subsctiption = this.route.params.subscribe(
      (params: any) => {
        this.productIndex = params['id'];
        this.selectedProduct = this.productService.getProductItem(this.productIndex);
      }
    )
  }
  ngOnDestroy() {
    this.subsctiption.unsubscribe();
  }
}
