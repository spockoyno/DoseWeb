import {BiHillThetaSpec} from '../models/biphasic-hill.model';
import {FactorInterval} from '../models/common';


export interface DoseModel  {
  small: number | undefined
  medium: number | undefined
  large: number | undefined
  xxl: number | undefined
}

export interface KappaModel  {
  kappaAssumed: number
  kappaMultipleDown: number
  kappaMultipleUp: number

}

export interface PreclinicalModel  {



  doseInterval: FactorInterval
  biHillModel: BiHillThetaSpec


}

export interface ClinicalModel  {
  dosesPreclinicalScale: DoseModel


  minimumResponseTarget: number
  kappaModel: KappaModel


}


export interface AppModel  {

  preclinical: PreclinicalModel
  clinical: ClinicalModel

}


export interface PreclinicalBiHillPlotData  {
 dose:  number[]
  response:  number[]

}

