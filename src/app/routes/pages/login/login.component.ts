import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  t: string;
  n: string;
  constructor(private authService: AuthService,
              private router: Router) {
                if (localStorage.getItem(`isLoggedIn`)) {
                  console.log('你已登录, 跳转到dashboard');
                  this.router.navigate(['/dashboard']);
                }
                console.log('登录， 并初始化');
                this.t = localStorage.getItem(`t`);
                this.n = localStorage.getItem(`n`);
                this.authService.login(this.t,this.n);
  }

  ngOnInit() {
  }

}
