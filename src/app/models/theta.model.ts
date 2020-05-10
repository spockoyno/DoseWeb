import {Interval} from './definitions.models';

export type ModelTypes = 'TwoLogs';

export type TwoLogParameters = 'emax_1' |'emid_1'|'h_1'|'emax_2' |'emid_2'|'h_2';

export type GammaParameetrNames = 'alpha'| 'gamma';

export type ParameterNames = TwoLogParameters|GammaParameetrNames;

export type TwoLogsModel =    ThetaModel<TwoLogParameters>;


export interface ThetaModel<T extends ParameterNames>  {
  model: ModelTypes;
  parameters: Record<T, number>;
  intervals: Record<T, Interval>;

}
