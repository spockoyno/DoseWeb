import {FactorInterval, TwoLogsTheta} from '../models/theta.models';




export interface PreclinicalModel  {

  doseInterval: FactorInterval
  twoLogisticsModel: TwoLogsTheta


}

export interface AppModel  {

  preclinical: PreclinicalModel;
}


export interface PreclinicalPlotData  {
 dose:  number[]
  response:  number[]

}
