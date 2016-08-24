import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-products',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css']
})
export class ProductsComponent implements OnInit {
  viewMode:string = 'grid';
  constructor() { }

  ngOnInit() {
  }
  setViewMode(mode:string) {
    this.viewMode = mode;
  }
}
