import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../service/order.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  orders;
  loading = false;
  isVisible = false;
  current = 1;
  constructor(private orderService: OrderService,
              private confirmServ: NzModalService,
              private _message: NzMessageService) { }

  // 订单操作确认框 @param order @param {number} type
  handle(order: any, type: number) {
    let desc;
    let reason;
    desc = type === 2 ? `请确认订单信息，点击确认接单` : `确认拒绝该订单`;
    reason = type === 2 ? `接单` : '拒绝';
  // 更新订单状态 @param {string} ordernum @param {number} status @param {string} test
  const updateStatus = (ordernum: string, status: number, test: string) => {
    let _id;
    _id = this._message.loading('正在执行中',{nzDuration: 0}).messageId;
    this.orderService.updateStatus(ordernum, status, test).then(res => {
      this._message.remove(_id);
      if (res.json().rcode === 0) {
        this._message.create(`success`, `接单成功`);
        window.location.reload();
      } else {
        this._message.create(`error`, `接单失败:${res.json().msg}`);
      }
    });
  };
  // 取消操作
  const cancel = () => {
    this._message.create(`warning`,`你取消了操作`);
  };
  // 弹窗信息
  this.confirmServ.confirm({
    title: desc,
    content: `单号： ${order.ordernum}<br/>
              下单时间: ${order.create_time}<br/>
              下单地址: ${order.userinfo.address}
              `,
              showConfirmLoading: true,
              onOk() {
                return new Promise((resolve) => {
                  updateStatus(order.ordernum, type, reason);
                  resolve();
                });
              },
              onCancel() {
                cancel();
              }
  })
}
  ngOnInit() {
    this.orderService.getAllOrder([1]).then(res => {
      this.orders = res.json().result.result.detail;
      this.loading = res.json().result.result.count ? true :false;
    });
  }

}
