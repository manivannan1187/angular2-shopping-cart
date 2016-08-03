import { Component, OnInit, OnDestroy } from '@angular/core';

import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {Goods} from "../goods";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {GoodsService} from "../goods.service";

@Component({
  moduleId: module.id,
  selector: 'sc-goods-detail',
  templateUrl: 'goods-detail.component.html',
  styleUrls: ['goods-detail.component.css'],
  directives: [
    MdIcon,
    MdButton,
  ],
  providers: [ MdIconRegistry ]
})
export class GoodsDetailComponent implements OnInit, OnDestroy {
  selectedGoods: Goods;
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
