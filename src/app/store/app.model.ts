import {TwoLogTheta, TwoLogThetaDomain} from '../models/two-logs.model';


export interface PreclinicalModel  {
  thetaTwoLogsInput: TwoLogTheta
  domainThetaTwoLogs: TwoLogThetaDomain


}

export interface AppModel  {

  preclinical: PreclinicalModel
}
