import {Interval} from './definitions.models';

export interface TwoLogTheta  {
  emax_1: number
  emid_1: number
  h_1: number
  emax_2: number
  emid_2: number
  h_2: number

}


export interface TwoLogThetaDomain  {
  emax_1: Interval
  emid_1: Interval
  h_1: Interval
  emax_2: Interval
  emid_2: Interval
  h_2: Interval

}


export const twoLogTheta_MIN_DOMAIN: TwoLogTheta = {
  emax_1: 0,
  emid_1: 0,
  h_1:  Number.NEGATIVE_INFINITY,
  emax_2: 0,
  emid_2: 0,
  h_2: Number.NEGATIVE_INFINITY
}


export const twoLogTheta_EXAMPLE_DOMAIN: TwoLogThetaDomain = {
  emax_1: {min:0, max:1000},
  emid_1: {min:0.1, max:100},
  h_1: {min:-10, max:10},
  emax_2: {min:0, max:1000},
  emid_2: {min:0.1, max:100},
  h_2: {min:-10, max:10},

}



export const twoLogTheta_EXAMPLE: TwoLogTheta = {
  emax_1: 100,
  emid_1: 10,
  h_1:  0.5,
  emax_2: 0,
  emid_2: 0.5,
  h_2: 1
}

