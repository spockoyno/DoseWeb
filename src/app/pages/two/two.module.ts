import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoComponent } from './two.component';
import {ComponentsModule} from '../../components/components.module';
import {UiImportsModule} from '../../ui-imports.module';



@NgModule({
  declarations: [TwoComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    UiImportsModule
  ]
})
export class TwoModule { }
