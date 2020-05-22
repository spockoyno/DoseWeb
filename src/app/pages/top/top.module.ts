import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top.component';
import {routes} from './navigator.model';
import {UiImportsModule} from '../../ui-imports.module';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../../components/components.module';
import {EtaExplorerModule} from '../eta-explorer/eta-explorer.module';
import {PreclinicalModule} from '../preclinical/preclinical.module';
import { NavigatorComponent } from './navigator/navigator.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [TopComponent, NavigatorComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiImportsModule,
    ComponentsModule,

    EtaExplorerModule,
    PreclinicalModule
  ]
})
export class TopModule { }
