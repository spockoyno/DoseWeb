import {AppModel, PreclinicalModel} from './app.model';
import {twoLogTheta_EXAMPLE} from '../models/two-logs.model';


export function initialAppState( ): AppModel {
  const preclinical: PreclinicalModel = {
    thetaTwoLogsInput: twoLogTheta_EXAMPLE
  };

  return {preclinical}; }
