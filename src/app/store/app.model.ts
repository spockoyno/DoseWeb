import {TwoLogsModel} from '../models/theta.model';
import {TwoLogsTheta} from '../models/definitions.models';


export interface PreclinicalModel  {
  thetaTwoLogsInput: TwoLogsModel;
  twoLogisticsModel: TwoLogsTheta


}

export interface AppModel  {

  preclinical: PreclinicalModel;
}
