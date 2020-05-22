import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopComponent} from './top.component';
import {routes} from './navigator.model';
import {UiImportsModule} from '../../ui-imports.module';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../../components/components.module';
import {EtaExplorerModule} from '../eta-explorer/eta-explorer.module';
import {NavigatorComponent} from './navigator/navigator.component';
import {HeaderComponent} from './header/header.component';
import {ClinicalModule} from '../clinical/clinical.module';


@NgModule({
  declarations: [TopComponent, NavigatorComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiImportsModule,
    ComponentsModule,

    EtaExplorerModule,
    ClinicalModule,

  ]
})
export class TopModule { }
