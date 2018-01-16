import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../service/order.service';
import {NzModalService} from 'ng-zorro-antd';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  orders= [];
  loading = false;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAllOrder([2]).then(res => {
      this.orders = res.json().result.result.detail;
      this.loading = res.json().result.result.count ? true : false;
    });
  }

}
