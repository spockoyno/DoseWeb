import {Routes} from '@angular/router';
import {TopComponent} from './top.component';
import {TwoComponent} from '../two/two.component';
import {OneComponent} from '../one/one.component';

export type RouteName =
  | '/one'
  | '/two'



// Todo: Need enabled field?
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

export const DEFAULT_STEPS: PageStep[] = [
  {
    title: 'One',
    route: ['/one'],
    enabled: false
  }, {
    title: 'Two',
    route: ['/two'],
    enabled: false
  },



]
