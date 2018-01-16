import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

import {PersonComponent} from './person/person.component';
import {SettingComponent} from './setting/setting.component';
import {NewPersonComponent} from './person/new-person.component';

const routes: Routes = [
  {path: 'setting', component: SettingComponent},
  {path: 'person', component: PersonComponent},
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SettingComponent,
    PersonComponent,
    NewPersonComponent
  ],
  exports: [
    RouterModule
  ],
  entryComponents: [
    NewPersonComponent
  ]
})
export class AccountModule {
}
