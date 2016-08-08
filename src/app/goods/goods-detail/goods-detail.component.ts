import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {Product} from "../product";
import {GoodsService} from "../goods.service";

@Component({
  moduleId: module.id,
  selector: 'sc-goods-detail',
  templateUrl: 'goods-detail.component.html',
  styleUrls: ['goods-detail.component.css'],
  directives: [
    MdIcon,
    MdButton,
    MD_CARD_DIRECTIVES
  ],
  providers: [ MdIconRegistry ]
})
export class GoodsDetailComponent implements OnInit, OnDestroy {
  selectedGoods: Product;
  private goodsIndex: number;
  private subsctiption: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private goodsService: GoodsService
  ) { }

  ngOnInit() {
    this.subsctiption = this.route.params.subscribe(
      (params: any) => {
        this.goodsIndex = params['id'];
        this.selectedGoods = this.goodsService.getGoodsItem(this.goodsIndex);
        console.log(this.selectedGoods);
      }
    )
  }
  ngOnDestroy() {
    this.subsctiption.unsubscribe();
  }

}
