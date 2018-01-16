import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import {CancelComponent} from './cancel/cancel.component';
import {NewComponent} from './new/new.component';
import {HistoryComponent} from './history/history.component';
import {RefunComponent} from './refun/refun.component';
import {TodoComponent} from './todo/todo.component';
import {UrgeComponent} from './urge/urge.component';

const routes: Routes = [
    {path: '', component: NewComponent},
    {path: 'todo', component: TodoComponent},
    {path: 'cancel', component: CancelComponent},
    {path: 'urge', component: UrgeComponent},
    {path: 'refun', component: RefunComponent},
    {path: 'history', component: HistoryComponent}
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        NewComponent,
        TodoComponent,
        CancelComponent,
        UrgeComponent,
        RefunComponent,
        HistoryComponent
    ],
    exports: [
        RouterModule
    ],
    entryComponents: []
})
export class OrderModule { }