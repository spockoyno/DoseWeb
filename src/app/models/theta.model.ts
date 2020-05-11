import {Interval} from './definitions.models';

export type ModelTypes = 'TwoLogs'

export type TwoLogParameters =
  | 'emax1'
  | 'emid1'
  | 'h1'
  | 'emax2'
  | 'emid2'
  | 'h2'

export type GammaParameetrNames = 'alpha' | 'gamma'

export type ParameterNames = TwoLogParameters | GammaParameetrNames

export type TwoLogsModel = ThetaModel<TwoLogParameters>

export interface ThetaModel<T extends ParameterNames> {
  model: ModelTypes
  parameters: Record<T, number>
  intervals: Record<T, Interval>
}
