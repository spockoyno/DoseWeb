import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClinicalComponent} from './clinical.component';
import {ClinicalService} from './services/clinical.service';
import {ComponentsModule} from '../../components/components.module';
import {KappaInputComponent} from './kappa-input/kappa-input.component';
import {UiImportsModule} from '../../ui-imports.module';


@NgModule({
  declarations: [ClinicalComponent, KappaInputComponent],
  providers: [ClinicalService],
  exports: [
    ClinicalComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    UiImportsModule
  ]
})
export class ClinicalModule { }
