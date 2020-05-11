import {ThetaSpec} from './common';

export type TwoLogsThetaValues =  TwoLogsTheta<number>
export type TwoLogsThetaTex = TwoLogsTheta<string>

export interface TwoLogsTheta<T = ThetaSpec>  {
  e0: T
  em: T
  emid1:  T
  h1: T
  emax: T
  emid2: T
  h2: T


}


export const twoLogs_THETA: TwoLogsTheta = {
  e0: {min: 0, step:  0.1, value:10, max: 1000},
  em: {min: 0.1, step:  0.1, value:100, max: 1000},
  emid1: {min: 0.1, step:  0.1, value:10, max: 1000},
  h1: {min: -10, step:  0.1, value:0.5, max: 10},
  emax: {min: 0, step:  0.1, value:100, max: 1000},
  emid2: {min: 0.1, step: 0.1, value:20, max: 1000},
  h2: {min: -10, step: 0.1, value:1, max: 10},

};



export const clinicalTwoLogsTheta_CORRECTED: TwoLogsThetaValues = {
  e0: 1.2,
  em: 1.2,
  emid1: 1.2,
  h1: 1.1,
  emax: 1.2,
  emid2: 1.2,
  h2: 0.8,

}





export const twoLogsTheta_TEX: TwoLogsThetaTex = {
  e0: "E_0",
  em: "E_m",
  emid1: "D_{50}",
  h1: "h_D",
  emax: "E_{\\max}",
  emid2: "U_{50}",
  h2: "h_U",

}



