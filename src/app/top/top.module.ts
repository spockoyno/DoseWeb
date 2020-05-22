import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopComponent} from './top.component';

import {UiImportsModule} from '../ui-imports.module';
import {RouterModule, Routes} from '@angular/router';
import {NavigatorComponent} from './navigator/navigator.component';
import {OneModule} from '../one/one.module';
import {TwoModule} from '../two/two.module';
import {OneComponent} from '../one/one.component';
import {TwoComponent} from '../two/two.component';


export type RouteName =
  | '/one'
  | '/two'




export interface PageStep {
  /** The step header. */
  title: string
  /** The step route. */
  route: [RouteName]
  /** True if the step is enabled. */
  enabled: boolean
}

export const routes: Routes = [
  {
    path: '',
    component: TopComponent,
    children: [
      {
        path: '',
        redirectTo: 'one'
      },

      {
        path: 'one',
        component: OneComponent
      },
      {
        path: 'two',
        component: TwoComponent
      },



    ]
  }
]
@NgModule({
  declarations: [TopComponent, NavigatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiImportsModule,



    OneModule,
    TwoModule

  ]
})
export class TopModule { }
