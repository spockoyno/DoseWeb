import {TwoLogsModel} from '../models/theta.model';


export interface PreclinicalModel  {
  thetaTwoLogsInput: TwoLogsModel;


}

export interface AppModel  {

  preclinical: PreclinicalModel;
}
