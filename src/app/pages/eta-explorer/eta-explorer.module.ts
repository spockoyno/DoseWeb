import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiImportsModule} from '../../ui-imports.module';
import {ComponentsModule} from '../../components/components.module';
import { EtaExplorerComponent } from './eta-explorer.component';
import {BiphasicHillEtaService} from './services/biphasic-hill-eta.service';
import { ThetaParameterComponent } from './theta-parameter/theta-parameter.component';



@NgModule({
  declarations: [EtaExplorerComponent, ThetaParameterComponent],
  providers: [BiphasicHillEtaService],
  imports: [
    CommonModule,
    ComponentsModule,
    UiImportsModule
  ]
})
export class EtaExplorerModule { }
