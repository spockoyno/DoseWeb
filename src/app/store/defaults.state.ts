import {AppModel, PreclinicalModel} from './app.model';
import {twoLogTheta_EXAMPLE} from '../models/two-logs.model';
import {twoLogs_THETA} from '../models/definitions.models';


export function initialAppState( ): AppModel {
  const preclinical: PreclinicalModel = {
    thetaTwoLogsInput: twoLogTheta_EXAMPLE,
    twoLogisticsModel: twoLogs_THETA
  };

  return {preclinical}; }
