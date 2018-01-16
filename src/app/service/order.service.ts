import { Inject, Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class OrderService {
    private headers = new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'x-access-token': localStorage.getItem('t'),
    });
    constructor(@Inject('BASE_CONFIG') private config,
                private http: Http) {

    }

    // 查询所有订单
    // @param {Array<number> status 0 (未支付) / eg:1(支付完成)
    //  /eg:2(确认订单) / eg:3(超时关闭) /eg:4(订单完成)}
    // @returns {Promise<any>}

    getAllOrder(status: Array<number>): Promise<any> {
        const body = {
            'data': {
                'userid': localStorage.getItem(`userid`),
                'page': 0,
                'pageSize': 10,
                'status': status
            },
            'sign': '1234'
        };
        console.log(JSON.stringify(body));
        const uri = `${this.config.uri}/order/list`;
        return this.http
        .post(uri, JSON.stringify(body), {headers: this.headers})
        .toPromise();
    }

    // 查询物流信息
    // @param {string} order 订单号  @returns {Promise<any>}
    getwl(order: string): Promise<any> {
        const body = {
            'data': {
                'userid': localStorage.getItem(`userid`),
                'order': order
            },
            'sign': '12345'
        };
        const uri = `${this.config.uri}/order/wl`;
        return this.http
        .post(uri,JSON.stringify(body), {headers: this.headers})
        .toPromise();
    }

    // 更新订单信息   @param {string} order 订单号  @param {number} status
    // 状态； 1为接单，2为取消订单  @param {string} reason 理由
    // @returns {Promise<any>}
    updateStatus(order: string, status: number, reason?: string): Promise<any> {
       const body = {
           'data': {
               'userid': localStorage.getItem(`userid`),
               'order': order,
               'status': status,
               'reason': reason ? reason : '默认接单'
           },
           'sign': '12345'
       };
       const uri = `${this.config.uri}/order/update`;
       return this.http
       .post(uri,JSON.stringify(body), {headers: this.headers})
       .toPromise(); 
    }
}