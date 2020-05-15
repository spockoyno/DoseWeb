import 'reflect-metadata';
import '../polyfills';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PreclinicalModule} from './pages/preclinical/preclinical.module';
import {StoreModule} from './store/store.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// @ts-ignore
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {ClinicalModule} from './pages/clinical/clinical.module';


PlotlyModule.plotlyjs = PlotlyJS;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    PreclinicalModule,
    StoreModule,
    MatIconModule,
    ClinicalModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
