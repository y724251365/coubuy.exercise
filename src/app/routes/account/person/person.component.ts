import { Component, OnInit } from '@angular/core';
import {NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {NewPersonComponent} from './new-person.component';
import {Validators} from '@angular/forms';
import {PersonService} from '../../../service/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person;
  loading = false;
  constructor(private modalService: NzModalService,
  private _notification: NzNotificationService,
private personService: PersonService) { }

  ngOnInit() {
    this.personService.getAllPerson().then(res => {
      this.person = res.json().result.data;
      this.loading = true;
    }).catch(res => {
      if(res.json().rcode === 260) {
        this.loading = true;
        this.person = [];
      }
    })
  }

  newPerson(s?: string) {
    const subscription = this.modalService.open({
      title: s ? '新增配送员' : '新增管理员',
      content:NewPersonComponent,
      onOk() {},
      onCancel(){
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        formlist: {
          role:[null,[Validators.required]],
          count: [null,[Validators.required]],
        },
        formname: [
          {
            name: '角色',
            id: 'role',
            value:s? s: 'manager',
            disabled: true
          },
          {
            name: '新增数量',
            id: 'count',
            value: '1'
          }
        ]
      }
    });
    subscription.subscribe((result: any) => {
      console.log(result);
      if(result.role) {
        this.personService.createPerson(result.role,result.count).then(res => {
          subscription.destroy();
          console.log(res.json().result.url);
          this.modalService.confirm({
            title: '请使用微信扫码，绑定公众号。即可即时接受订单推送消息',
            content:`<img src='${res.json().result.url}' width="200">`,
            onOk(){
              console.log('确定');
            },
            onCancel() {}
          });
        })
      }
    })
  }
}
