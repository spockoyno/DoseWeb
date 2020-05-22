import {Routes} from '@angular/router';
import {TopComponent} from './top.component';
import {EtaExplorerComponent} from '../eta-explorer/eta-explorer.component';
import {ClinicalComponent} from '../clinical/clinical.component';

export type RouteName =
  | '/etaExplorer'
  | '/clinicalScaler'



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
        redirectTo: 'etaExplorer'
      },

      {
        path: 'etaExplorer',
        component: EtaExplorerComponent
      },
      {
        path: 'clinicalScaler',
        component: ClinicalComponent
      },



    ]
  }
]

export const DEFAULT_STEPS: PageStep[] = [
  {
    title: 'Model Explorer',
    route: ['/etaExplorer'],
    enabled: false
  }, {
    title: 'FIH Scaling',
    route: ['/clinicalScaler'],
    enabled: false
  },



]
