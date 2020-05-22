import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiImportsModule} from '../../ui-imports.module';
import {ComponentsModule} from '../../components/components.module';
import { EtaExplorerComponent } from './eta-explorer.component';



@NgModule({
  declarations: [EtaExplorerComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    UiImportsModule
  ]
})
export class EtaExplorerModule { }
