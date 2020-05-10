import {ModelTypes} from './theta.model';
import {Interval} from './definitions.models';

export interface ParameterInput {
  display: string
  parameterKey: string
  value: number
  interval: Interval
}
export interface ModelParameterInputs {
  modelType: ModelTypes

  parameters: ThetaElementInput[]
}


export interface ThetaElementInput {
  parameter: string
  value: number

  ceil: number
  floor: number
  step: number



}
