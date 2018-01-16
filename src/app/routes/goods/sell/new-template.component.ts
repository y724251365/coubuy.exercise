import { Component, Input, OnInit } from '@angular/core';
import {NzModalSubject, NzModalService, NzMessageService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
    selector: 'app-new-template',
    templateUrl: './new-template.component.html'
})
export class NewTemplateComponent implements OnInit {
    _formlist: any;
    _formname: Array<any>;
    _goods: Array<any>;
    isConfirmLoading = false;
    validateForm: FormGroup;

    @Input()
    set formlist(value: any) {
        this._formlist = value;
    }
    set formname(value:any) {
        this._formname = value;
    }
    set goods(value: Array<any>) {
        this._goods = value;
    }
    emitDataOutside($event: any) {
        this.isConfirmLoading = true;
        this.subject.next(this.validateForm.value);
    }
    handleCancel(e) {
        this.subject.destroy('onCancel');
    }
    constructor(private subject: NzModalSubject,
                private fb: FormBuilder) {
                    this.subject.on('onDestory', () => {
                        console.log('destroy');
                    })
                 }

    ngOnInit() { 
            this.validateForm = this.fb.group(this._formlist);
    }

}