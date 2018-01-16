import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GoodsService} from '../../../service/goods.service';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-libs',
  templateUrl: './libs.component.html',
  styleUrls: ['./libs.component.scss']
})
export class LibsComponent implements OnInit {
  goods;
  good_tmp;
  loading = false;
  isVisible = false;
  isVisible_edit = false;
  isConfirmLoading = false;
  isConfirmLoading_t = false;
  validateForm:FormGroup;
  validateForm_t: FormGroup;

  // 文件上传
  imgurl: string;
  uploader: FileUploader = new FileUploader({
    url: '/api/goods/upload',
    isHTML5: true,
    allowedMimeType: ['image/jpeg', 'image/png']
  });
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;
  files: any[] = [];
  // filesLength = 0;
  // 初始化
  getInit() {
    this.goodsService.getAllGoods().then(res =>{
      this.goods = res.json().result.data;
      this.loading = res.json().result.data.length > 0 ? true : false;
    });
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  fileOverAnother(e:any): void {
    this.hasAnotherDropZoneOver = e;
  }

  uploadFile() {
    // 上传
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      // 上传文件成功
      if(status === 200) {
        //上传文件后获取服务器返回的数据
        const tempRes = JSON.parse(response);
        this.imgurl = tempRes.result.url;
        localStorage.setItem('img', tempRes.result.url);
        console.log(tempRes);
      }else {
        // 上传文件后获取服务器返回的数据错误
        alert('');
      }
    };
    this.uploader.queue[0].upload();// 开始上传
  }

  showModal() {
    this.isVisible = true;
  }
  
  showEditModal(good: any) {
    this.isVisible_edit = true;
    this.good_tmp = good;
    this.good_tmp.price2 = (this.good_tmp.price / 100).toFixed(2);
    console.log(good);
  }
  handleOk() {
    this.isConfirmLoading = true;
    this.validateForm.value.img = localStorage.getItem('img');
    console.log(this.validateForm.value);
    if(this.validateForm.value.img) {
      this.goodsService.createGoods(this.validateForm.value).then(res => {
        console.log(`获取结果为${res}`);
        this.isVisible = false;
        this.isConfirmLoading = false;
        this.getInit();
      });
    } else {
      alert('请上传图片');
    }
  }

  handleCancel(e) {
    this.isVisible = false;
  }

  editOk() {
    this.isConfirmLoading_t = true;
    console.log(this.validateForm_t.value);
    this.goodsService.updateGoods(this.validateForm_t.value).then(res => {
      console.log(`获取结果为${res}`);
      this.isVisible_edit = false;
      this.isConfirmLoading_t = false;
      this.good_tmp = null;
      this.getInit();
    });
  }
  editCancel(e) {
    this.isVisible_edit = false;
    this.good_tmp = null;
  }
  constructor(private goodsService: GoodsService,
              private fb: FormBuilder) {

               }

  ngOnInit() {
    // 获取所有的商品列表
    this.getInit();
    //表单验证
    //@type {FormGroup}
    this.validateForm = this.fb.group({
      goods_name: [null, [Validators.required]],
      price: [null,[Validators.required]],
      tag: [null],
      description: [null,[Validators.required]],
      img: [null],
    });
    this.validateForm_t = this.fb.group({
      id_t: [null, [Validators.required]],
      goods_name: [null, [Validators.required]],
      price_t: [null,[Validators.required]],
      tag_t: [null],
      description_t: [null, [Validators.required]],
      img_t: [null]
    });
    //   文件上传   @param {FileItem} f @returns {FileItem}
    this.uploader.onAfterAddingFile = (f) => {
      this.files = this.uploader.queue;
      return f;
    };
  }

  selectedFileOnChange(event: any) {
    // 打印文件选择名称
    console.log(event.target.value);
  }
}
