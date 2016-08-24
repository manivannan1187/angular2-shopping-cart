import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/product.component';
import { CatalogComponent } from './catalog.component';
import { HeaderComponent } from './header.component';
import { routing } from "./app.routes";
import { CartComponent } from './cart/cart.component';
import { ProductGridComponent } from './products/product-grid/product-grid.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import {ProductService} from "./shared/product.service";
import { ProductItemComponent } from './products/product-list/product-item.component';
import { ProductItemGridComponent } from './products/product-grid/product-item-grid.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import {CartService} from "./cart/cart.service";

@NgModule({
  declarations: [
    ProductsComponent,
    CatalogComponent,
    HeaderComponent,
    CartComponent,
    ProductGridComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductItemGridComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [ProductService, CartService],
  bootstrap: [CatalogComponent]
})
export class AppModule {

}
