import {AppModel, PreclinicalModel} from './app.model';
import {twoLogs_THETA} from '../models/theta-two-logs.models';


export function initialAppState( ): AppModel {
  const dosing = { twoDoses: [200, 500],
  }
  const preclinical: PreclinicalModel = {


   doseInterval: {min: 0.1, step: 0.25, max: 10000 },
    twoLogisticsModel: twoLogs_THETA
  };

  return {preclinical: preclinical, dosing:dosing}; }
