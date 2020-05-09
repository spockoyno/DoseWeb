import {AppModel, PreclinicalModel} from './app.model';
import {twoLogTheta_EXAMPLE, twoLogTheta_EXAMPLE_DOMAIN} from '../models/two-logs.model';


export function initialAppState( ): AppModel {
  const preclinical: PreclinicalModel= {
    thetaTwoLogsInput: twoLogTheta_EXAMPLE,
    domainThetaTwoLogs: twoLogTheta_EXAMPLE_DOMAIN
  }

  return {preclinical: preclinical} }
