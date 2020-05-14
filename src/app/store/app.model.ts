import {TwoLogsTheta} from '../models/theta-two-logs.models';
import {FactorInterval} from '../models/common';

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
