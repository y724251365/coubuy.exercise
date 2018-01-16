import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
// 这个模块也未定义，找不到。
import {PagesModule} from '../routes/pages/pages.module';
import {routes} from './routes';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FinanceComponent} from './finance/finance.component';

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forRoot(routes, { useHash: true}),
        // {userHash:true}上面括号里面
        PagesModule
    ],
    declarations:[
        DashboardComponent,
        FinanceComponent
    ],
    exports:[RouterModule]
})
export class RoutesModule{

}