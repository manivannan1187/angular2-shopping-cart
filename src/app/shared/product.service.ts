import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  private productList: Product[] = [
    new Product(
        'product1',
        100.00,
        'Lorem1 Ipsum is simply dummy text of the printing and typesetting industry.',
        'http://placehold.it/250x250http://placehold.it/250x250'),
    new Product(
        'product2',
        200.00,
        'Lorem2 Ipsum is simply dummy text of the printing and typesetting industry.',
        'http://placehold.it/250x250http://placehold.it/250x250'),
    new Product(
        'product3',
        300.00,
        'Lorem3 Ipsum is simply dummy text of the printing and typesetting industry.',
        'http://placehold.it/250x250http://placehold.it/250x250'),
    new Product('product4',
        400.00,
        'Lorem4 Ipsum is simply dummy text of the printing and typesetting industry.',
        'http://placehold.it/250x250http://placehold.it/250x250')
  ];

  constructor() { }

  getProducts() {
    return this.productList;
  }
  getProductItem(id: number) {
    return this.productList[id];
  }

}
