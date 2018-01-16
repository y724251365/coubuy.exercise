import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';
import {Router} from '@angular/router';
import { CookiesService } from './cookies.service';
@Injectable()
export class AuthService {
    private headers = new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'x-access-token': localStorage.getItem('t'),
    });
    userid: string;
    appid = [];

    constructor(private http: Http,
                private router: Router,
                private _cookie: CookiesService) { }
    login(t: string, n: string) {
        if (t !== null && n !==null) {
            this.getInit().then(res => {
                // 保存 userid
                this.userid = res.json().result.userid;

                // 登录cookie， 60分钟过期
                this._cookie.setCookie('login','true',60);

                // 保存在localStorage 
                localStorage.setItem(`userid`, this.userid);
                this.router.navigate(['dashboard']);
            }).catch(res => {
                if(res.json().rcode === 103) {
                    // 过期
                    console.log(res.json());
                    this._cookie.delCookie('login');
                    localStorage.setItem(`userid`, '');
                    localStorage.setItem(`t`, '');
                    localStorage.setItem(`n`, '');
                }
            });
        }
    }

    logout(): void {
        this._cookie.delCookie('login');
    }

    async getInit(): Promise<any> {
        const uri = ` /init`;
        return this.http.post(uri, {}, {headers:this.headers}).toPromise();
    }
}