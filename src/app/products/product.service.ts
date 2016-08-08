import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
  private productList: Product[] = [
    new Product('product1', 100.00, 'Lorem1 Ipsum is simply dummy text of the printing and typesetting industry.', 'https://c1.staticflickr.com/1/186/382004453_f4b2772254.jpg'),
    new Product('product2', 200.00, 'Lorem2 Ipsum is simply dummy text of the printing and typesetting industry.', 'https://c1.staticflickr.com/1/186/382004453_f4b2772254.jpg'),
    new Product('product3', 300.00, 'Lorem3 Ipsum is simply dummy text of the printing and typesetting industry.', 'https://c1.staticflickr.com/1/186/382004453_f4b2772254.jpg'),
    new Product('product4', 400.00, 'Lorem4 Ipsum is simply dummy text of the printing and typesetting industry.', 'https://c1.staticflickr.com/1/186/382004453_f4b2772254.jpg')
  ];

  constructor() { }

  getProducts() {
    return this.productList;
  }
  getProductItem(id: number) {
    return this.productList[id];
  }
}
