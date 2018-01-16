import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RoutesModule} from './routes/routes.module';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import {CoreModule} from './core/core.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    RoutesModule,
    SharedModule.forRoot(),
    LayoutModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }