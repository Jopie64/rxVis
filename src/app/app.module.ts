import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RxDrawerComponent } from './rx-drawer/rx-drawer.component';
import { EaseShowerComponent } from './ease-shower/ease-shower.component';

@NgModule({
  declarations: [
    AppComponent,
    RxDrawerComponent,
    EaseShowerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
