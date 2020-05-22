import {BiphasicHillTheta, FactorInterval} from '../../models/common';
import {PageTwoStateModel} from './page-two.state.model';


export interface EtaStateModel  {
  doseInterval: FactorInterval
  biHillModel: BiphasicHillTheta
  dummy: PageTwoStateModel



}

