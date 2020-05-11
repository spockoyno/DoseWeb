
export interface Interval  {
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
  emax1: ThetaSpec
  emid1:  ThetaSpec
  h1: ThetaSpec
  emax2: ThetaSpec
  emid2: ThetaSpec
  h2: ThetaSpec

}


export const twoLogs_THETA: TwoLogsTheta = {
  emax1: {min: 0, step:  1, value:100, max: 1000},
  emid1: {min: 0.1, step:  1, value:10, max: 100},
  h1: {min: -10, step:  0.25, value:0.5, max: 10},
  emax2: {min: 0, step:  1, value:0, max: 1000},
  emid2: {min: 0.1, step:  1, value:20, max: 100},
  h2: {min: -10, step:  0.25, value:1, max: 10},

};
