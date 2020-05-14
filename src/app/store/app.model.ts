import {BiHillTheta} from '../models/biphasic-hill.model';
import {FactorInterval} from '../models/common';

export interface DosingModel  {

  twoDoses: number[]

}


export interface PreclinicalModel  {



  doseInterval: FactorInterval
  twoLogisticsModel: BiHillTheta


}

export interface AppModel  {
 dosing: DosingModel
  preclinical: PreclinicalModel;
}


export interface PreclinicalPlotData  {
 dose:  number[]
  response:  number[]

}
