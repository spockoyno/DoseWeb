import {FactorInterval, TwoLogsTheta} from '../models/theta.models';

export interface DosingModel  {
  twoDoses: number[]

}


export interface PreclinicalModel  {



  doseInterval: FactorInterval
  twoLogisticsModel: TwoLogsTheta


}

export interface AppModel  {
 dosing: DosingModel
  preclinical: PreclinicalModel;
}


export interface PreclinicalPlotData  {
 dose:  number[]
  response:  number[]

}
