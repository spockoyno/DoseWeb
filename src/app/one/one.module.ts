import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OneComponent} from './one.component';
import {UiImportsModule} from '../ui-imports.module';


@NgModule({
  declarations: [OneComponent],
  imports: [
    CommonModule,
    UiImportsModule
  ]
})
export class OneModule { }
