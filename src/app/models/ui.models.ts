import { ModelTypes } from './theta.model'
import { Interval } from './definitions.models'
import {FormControl} from '../utils/forms.utils';
import {Options} from 'ng5-slider';

export interface ParameterInput {
  display: string
  parameterKey: string
  value: number
  interval: Interval
}
export interface ModelParameterInputs {
  modelType: ModelTypes

  parameters: ParameterInput[]
}


export interface ThetaElementInput extends Options{
  model: ModelTypes
  parameter: string

  ceil: number
  floor: number
  step: number
  value: number


}
