import {BiphasicHillTheta, FactorInterval} from '../../models/common';
import {DummyOneModel, DummyTwoModel} from './dummy.state.model';


export interface EtaStateModel  {
  doseInterval: FactorInterval
  biHillModel: BiphasicHillTheta
  dummyOne: DummyOneModel
  dummyTwo: DummyTwoModel




}

