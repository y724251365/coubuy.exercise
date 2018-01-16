import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminEnterComponent} from './admin-enter/admin-enter.component';
import {NewEnterComponent} from './new-enter/new-enter.component';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
    {path: 'new', component:NewEnterComponent},
    {path: 'admin',component:AdminEnterComponent},
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        AdminEnterComponent,
        NewEnterComponent
    ],
    exports: [
        RouterModule
    ],
    entryComponents: []
})
export class EnterModule {
    
}