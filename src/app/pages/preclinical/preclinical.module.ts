import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreclinicalComponent} from './preclinical.component';
import {UserInputService} from './services/user-input.service';
import {ParameterInputComponent} from './parameter-input/parameter-input.component';
import {UiImportsModule} from '../../ui-imports.module';
import {ComponentsModule} from '../../components/components.module';
import {ElementInputComponent} from './element-input/element-input.component';
import {PlotService} from './services/plot.service';
import {TwoLogisticsInputService} from './services/two-logistics-input.service';
import { TwoLogisticsComponent } from './two-logistics/two-logistics.component';
import { ThetaRowComponent } from './theta-row/theta-row.component';


@NgModule({
  declarations: [PreclinicalComponent, ParameterInputComponent, ElementInputComponent, TwoLogisticsComponent, ThetaRowComponent],
   providers: [UserInputService, PlotService, TwoLogisticsInputService],
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
