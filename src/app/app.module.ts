import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PreclinicalModule} from './pages/preclinical/preclinical.module';
import {StoreModule} from './store/store.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    PreclinicalModule,
    StoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
