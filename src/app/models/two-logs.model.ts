import {Interval} from './definitions.models';
import {ThetaModel, TwoLogParameters} from './theta.model';

export const twoLogTheta_MIN_DOMAIN = {
  emax_1: 0,
  emid_1: 0,
  h_1:  Number.NEGATIVE_INFINITY,
  emax_2: 0,
  emid_2: 0,
  h_2: Number.NEGATIVE_INFINITY
};


export const twoLogTheta_EXAMPLE_DOMAIN: Record<TwoLogParameters, Interval> = {
  emax_1: {min: 0, step:  1, max: 1000},
  emid_1: {min: 0.1, step:  1, max: 100},
  h_1: {min: -10, step:  0.25, max: 10},
  emax_2: {min: 0, step:  1, max: 1000},
  emid_2: {min: 0.1, step:  1, max: 100},
  h_2: {min: -10, step:  0.25, max: 10},

};





export const twoLogTheta_EXAMPLE: ThetaModel<TwoLogParameters> = {
  model: 'TwoLogs',
  intervals: twoLogTheta_EXAMPLE_DOMAIN,
  parameters: { emax_1: 100,
    emid_1: 10,
    h_1:  0.5,
    emax_2: 0,
    emid_2: 0.5,
    h_2: 1}
};

