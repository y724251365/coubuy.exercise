import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isOpenOrder = false;
  isOpenGoods = false;
  isOpenEnter = false;
  isOpenSetting = false;
  openChange(value) {
    if(value === 'Order'){
      this.isOpenGoods = false;
      this.isOpenEnter = false;
      this.isOpenSetting = false;
    }else if (value === 'Goods') {
      this.isOpenOrder = false;
      this.isOpenEnter = false;
      this.isOpenSetting = false;
    } else if (value === 'Enter') {
      this.isOpenOrder = false;
      this.isOpenGoods = false;
      this.isOpenSetting = false;
    } else if (value === 'Setting') {
      this.isOpenOrder = false;
      this.isOpenGoods = false;
      this.isOpenEnter = false;
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
