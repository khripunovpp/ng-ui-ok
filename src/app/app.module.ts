import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgUiOkModule} from "../../projects/ng-ui-ok/src/lib/ng-ui-ok.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgUiOkModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
