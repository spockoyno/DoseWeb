import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreclinicalComponent} from './preclinical.component';
import {UiImportsModule} from '../../ui-imports.module';
import {ComponentsModule} from '../../components/components.module';
import {PlotService} from './services/plot.service';
import {TwoLogisticsInputService} from './services/two-logistics-input.service';
import {TwoLogisticsComponent} from './two-logistics/two-logistics.component';
import {ThetaRowComponent} from './theta-row/theta-row.component';
import { PlotComponent } from './plot/plot.component';


@NgModule({
  declarations: [PreclinicalComponent,  TwoLogisticsComponent, ThetaRowComponent, PlotComponent],
   providers: [ PlotService, TwoLogisticsInputService],
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
