import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import {SharedModule} from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const COMPONENTS = [
  LayoutComponent,
  HeaderComponent,
  SidenavComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }