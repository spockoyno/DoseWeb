import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderInputComponent} from './slider-input/slider-input.component';
import {NumberInputComponent} from './number-input/number-input.component';
import {UiImportsModule} from '../ui-imports.module';


@NgModule({
  declarations: [SliderInputComponent, NumberInputComponent],
  exports: [
    SliderInputComponent
  ],
  imports: [
    CommonModule,
    UiImportsModule
  ]
})
export class ComponentsModule { }
