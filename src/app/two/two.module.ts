import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TwoComponent} from './two.component';
import {UiImportsModule} from '../ui-imports.module';


@NgModule({
  declarations: [TwoComponent],
  imports: [
    CommonModule,
    UiImportsModule
  ]
})
export class TwoModule { }
