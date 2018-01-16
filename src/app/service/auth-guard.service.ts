import {Injectable} from '@angular/core';
import {CanActivate, Router, 
        ActivatedRouteSnapshot,
    RouterStateSnapshot } from '@angular/router';
import {AuthService} from './auth.service';
import {CookiesService} from './cookies.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router,
                private _cookie: CookiesService) {
}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        // return this.checkAuth(url); 
        return true;
    }

    checkAuth(url): boolean {
        if(this._cookie.getCookie('login') === 'true') {
            console.log('成功登录');
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}