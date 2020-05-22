import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one.component';
import {ComponentsModule} from '../../components/components.module';
import {UiImportsModule} from '../../ui-imports.module';



@NgModule({
  declarations: [OneComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    UiImportsModule
  ]
})
export class OneModule { }
