
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
  emid1: {min: 0.1, step:  0.1, value:10, max: 100},
  h1: {min: -10, step:  0.1, value:0.5, max: 10},
  emax: {min: 0, step:  0.1, value:0, max: 1000},
  emid2: {min: 0.1, step: 0.1, value:20, max: 100},
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


export function twoLogToCeder(t: TwoLogsTheta ): CedergreenTheta {

  const ans: CedergreenTheta = {a: t.h1,
    b: t.em, c: t.emid1, d: t.emax, e: t.emid2, f: t.h2
  }
  return ans }
