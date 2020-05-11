
export interface FactorInterval  {
  min: number;
  max: number;
  step: number
}

export interface ThetaSpec  {
  min: number;
  max: number;
  step: number
  value: number
}


export interface TwoLogsTheta  {
  e0: ThetaSpec
  em: ThetaSpec
  emid1:  ThetaSpec
  h1: ThetaSpec
  emax: ThetaSpec
  emid2: ThetaSpec
  h2: ThetaSpec


}

export interface CedergreenTheta  {
  a: ThetaSpec
  b:  ThetaSpec
  c: ThetaSpec
  d: ThetaSpec
  e: ThetaSpec
  f: ThetaSpec

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


export const ceder_THETA: CedergreenTheta = {
  a: {min: -10, step:  0.1, value:0.5, max: 10},
  b: {min: 0.1, step:  0.1, value:10, max: 100},
  c: {min: 0, step:  0.1, value:100, max: 1000},
  d: {min: 0, step:  1, value:0, max: 1000},
  e: {min: 0.1, step:  1, value:20, max: 100},
  f: {min: 0, step:  0.25, value:1, max: 100},

};



export const clinicalCorrect = {
  e0: 1.2,
  em: 1.2,
  emid1: 1.2,
  h1: 1.1,
  emax: 1.2,
  emid2: 1.2,
  h2: 0.8,

}

export function twoLogToClinical(t: TwoLogsTheta ): TwoLogsTheta {
  const a = clinicalCorrect
const e0: ThetaSpec = {...t.e0, value: a.e0}
const   em: ThetaSpec = {...t.em, value: a.em}
 const  emid1:  ThetaSpec = {...t.emid1, value: a.emid1}
 const  h1: ThetaSpec = {...t.h1, value: a.h1}
const   emax: ThetaSpec = {...t.emax, value: a.emax}
const   emid2: ThetaSpec = {...t.emid1, value: a.emid2}
const   h2: ThetaSpec = {...t.h2, value: a.h2}

return {e0: e0,
em: em, emid1:emid1,
h1: h1,
emax: emax,
emid2: emid2,
h2: h2}
 }



