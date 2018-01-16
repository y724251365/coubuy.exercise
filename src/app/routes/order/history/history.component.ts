import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../service/order.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  orders = [];
  loading = false;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAllOrder([4]).then(res => {
      this.orders = res.json().result.result.detail;
      this.loading = res.json().result.result.count ? true : false;
    });
  }

}
