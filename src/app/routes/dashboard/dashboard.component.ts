import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../service/order.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  orders;
  loading=false;
  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.orderService.getAllOrder([1]).then(res =>{
      this.orders = res.json().result.result.count;
      this.loading = res.json().result.count ? true : false;
    })
  }

}
