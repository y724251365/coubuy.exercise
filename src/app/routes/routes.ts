import {LayoutComponent } from '../layout/layout.component';
import {AuthGuardService} from '../service/service.module';
//当前模块暂时还不是模块,解开注释会报错
import {DashboardComponent} from './dashboard/dashboard.component';
import {FinanceComponent} from './finance/finance.component';
import {LoginComponent} from './pages/login/login.component';
import {Page404Component} from './pages/page404/page404.component';

export const routes=[
    {path:'',component:LayoutComponent,
    children:[
        {path:'',redirectTo:'dashboard',pathMatch:'full'},
        {path:'dashboard',component:DashboardComponent},
        {path:'order',loadChildren:'./order/order.module#OrderModule'},
        {path:'goods',loadChildren:'./goods/goods.module#GoodsModule'},
        {path:'finance',component:FinanceComponent},
        {path:'enter',loadChildren:'./enter/enter.module#EnterModule'},
        {path:'account',loadChildren:'./account/account.module#AccountModule'},
        {path:'pages',loadChildren:',.pages/pages.module#PagesModule'}
    ],
    canActive:[AuthGuardService]
    // 这个是路由守卫，暂时未定义、
},
// 单页不包裹Layout
{path:'**',redirectTo:'login'},
{path:'index.html:t:n',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'404',component:Page404Component}
];