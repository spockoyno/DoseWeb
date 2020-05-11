import {AppModel, PreclinicalModel} from './app.model';
import {twoLogs_THETA} from '../models/theta.models';


export function initialAppState( ): AppModel {
  const preclinical: PreclinicalModel = {
   doseInterval: {min: 0.1, step: 0.25, max: 1000 },
    twoLogisticsModel: twoLogs_THETA
  };

  return {preclinical}; }