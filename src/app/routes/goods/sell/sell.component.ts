import { Component, OnInit } from '@angular/core';
import {GoodsService} from '../../../service/goods.service';
import {NzMessageService, NzModalService, NzNotificationService} from 'ng-zorro-antd';
import {NewTemplateComponent} from './new-template.component';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  template;

  goods = [
    {
      'goods_name': 'goods_name',
      'price' : 100,
      'spce':'spec',
      'description' : 'description',
      'pic' : 'pic'
    }
  ];
  constructor(private goodsService: GoodsService,
              private modalService: NzModalService,
              private message: NzMessageService,
              private _notification: NzNotificationService) {

               }

  ngOnInit() {
    this.init();
  }
  init() {
    this.goodsService.getTemplate().then(res => {
      this.template = res.json().result.data;
      console.log(this.template);
    });
  }

  cancel() {
    this.message.info('取消');
  }

  confirm() {
    this.goodsService.createTemplate().then(res => {
      console.log(res.json());
      this.init();
      this.message.info('新建模板成功');
    });
  }

  bandTemplateAPPID(t: number) {
    this.message.info('请联系管理员罗烽 绑定');
    // this.goodsService.bindingTA(t, 'test').then(res => {
      // console.log(res.json());
      // this.init();
      // this.message.info('上线成功');
    // });
  }

  newChannel(t: number) {
    const subscription = this.modalService.open({
      title: '新建分类',
      content: NewTemplateComponent,
      onOk(){

      },
      onCancel() {
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        formlist: {
          template: [null, [Validators.required]],
          num: [null,[Validators.required]],
          name: [null, [Validators.required]],
        },
        formname: [
          {
            name: '门店模板',
            id: 'template',
            value: t,
            disabled: true
          },
          {
            name: '序号',
            id: 'num'
          },
          {
            name: '分类名称',
            id: 'name'
          },
        ]
      }
    });
    subscription.subscribe((result: any) => {
      console.log(result);
      if(result.name) {
        this.goodsService.createChannel(result).then(res => {
          console.log(res.json());
          this.init();
          this._notification.create(`success`,'操作提醒', '新建分类成功');
          subscription.destroy();
        });
      }
    });
  }

  editChannel(t:number, c:any) {
    const subscription = this.modalService.open({
      title: '修改分类',
      content: NewTemplateComponent,
      onOk() {

      },
      onCancel() {
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        formlist: {
          template: [null, [Validators.required]],
          channel: [null,[Validators.required]],
          num: [null,[Validators.required]],
         name: [null,[Validators.required]]
        },
        formname: [
          {
            name: '门店模板',
            id: 'template',
            value: t,
            disabled: true,
          },
          {
            name: '分类ID',
            id: 'channel',
            value: c.channel,
            disabled: true,
          },
          {name: '分类名称',id: 'name',value:c.name},
          {name: '序号', id: 'num', value: c.num}
        ]
      }
    });
    subscription.subscribe((result: any) => {
      console.log(result);
      if(result.name) {
        this.goodsService.updateChannel(result).then(res => {
          console.log(res.json());
          this.init();
          this._notification.create(`success`, '操作提醒', '修改分类成功');
          subscription.destroy();
        });
      }
    });
  }

  addGoods(c: any) {
    const tmp = [];
    this.goodsService.getAllGoods().then(res => {
      for(const i of res.json().result.data) {
        const temp = {value:i.id,label:i.id + i.goods_name};
        tmp.push(temp);
      }
    });
    const subscription = this.modalService.open({
      title: '上架商品',
      content: NewTemplateComponent,
      onOk() {

      },
      onCancel() {
        console.log('Click cancel');
      },
      footer:false,
      componentParams: {
        formlist: {
          goods: [null, [Validators.required]],
          name: [null, [Validators.required]],
          channel: [null, [Validators.required]],
          num: [null, [Validators.required]]
        },
        formname: [
          {name: '分类ID',id:'channel',value:c.channel,disabled: true},
          {name: '分类名称',id: 'name', value: c.name, disabled: true},
          {name: '选择商品',id: 'goods'},
          {name:'序号',id:'num',value:c.num}
        ],
        goods: tmp
      }
    });
    subscription.subscribe((result: any) => {
      console.log(result);
      if(result.channel) {
        this.goodsService.bandChannel(result, 'band').then(res => {
          console.log(res.json());
          this.init();
          this._notification.create(`success`, '操作提醒', '上架商品成功');
          subscription.destroy();
        });
      }
    });
  }
}
