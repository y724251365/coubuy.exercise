import {NgModule,Optional,SkipSelf} from '@angular/core';
import {ServicesModule} from '../service/service.module';
import {HttpModule} from '@angular/http';
// 未定义的模块。。。
@NgModule({
    imports:[
        HttpModule,
        ServicesModule.forRoot(),
    ],
    providers:[
        {
            provide:'BASE_CONFIG',
            useValue:{
                uri:'/api'
            }
        }
    ],
    declarations:[]
})
export class CoreModule {
    t:string;
    n:string;
    constructor(@Optional() @SkipSelf() parentModule:CoreModule) {
        if(parentModule) {
            throw new Error('CoreModule 已经装载，请仅在 AppModule 中引入该模块.');
            }
            // 保存tn
            this.t=this.GetQueryString('t');
            this.n=this.GetQueryString('n');
            if(this.t !==null&& this.n !==null) {
                if(this.t !==localStorage.getItem('t') || this.n !== localStorage.getItem('n')) {
                    localStorage.setItem('t',this.t);
                    localStorage.setItem('n',this.n);
                }
            }
        }
        // 获取URL参数
        // @param name
        // @returns {any}
        // @constructor
        GetQueryString(name) {
            const reg= new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
            const r=window.location.search.substr(1).match(reg);
            if(r!=null) {
                return decodeURIComponent(r[2]);
            }else{
                return null;
            }
        }
    }