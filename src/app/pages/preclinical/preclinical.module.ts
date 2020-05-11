import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreclinicalComponent} from './preclinical.component';
import {UserInputService} from './services/user-input.service';
import {ParameterInputComponent} from './parameter-input/parameter-input.component';
import {UiImportsModule} from '../../ui-imports.module';
import {ComponentsModule} from '../../components/components.module';
import {ElementInputComponent} from './element-input/element-input.component';
import {PlotService} from './services/plot.service';


@NgModule({
  declarations: [PreclinicalComponent, ParameterInputComponent, ElementInputComponent],
   providers: [UserInputService, PlotService],
  exports: [
    PreclinicalComponent
  ],
  imports: [
    CommonModule,
    UiImportsModule,
    ComponentsModule
  ]
})
export class PreclinicalModule { }
