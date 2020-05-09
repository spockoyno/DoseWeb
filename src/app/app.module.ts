import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PreclinicalModule} from './components/preclinical/preclinical.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PreclinicalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
