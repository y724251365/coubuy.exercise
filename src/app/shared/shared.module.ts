import {ModuleWithProviders,NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgZorroAntdModule.forRoot()
    ],
    exports:[
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        NgZorroAntdModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders{
        return {
            ngModule:SharedModule,
            providers:[]
        };
    }
}