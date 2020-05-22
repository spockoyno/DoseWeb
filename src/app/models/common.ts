import {Plotly} from 'angular-plotly.js/src/app/shared/plotly.interface';

export type LayoutPlotly = Partial<Plotly.Layout>

export interface FactorInterval {
  min: number
  max: number
  step: number
}

export interface ThetaSpec {
  min: number
  max: number
  step: number
  val: number
}

export type BiphasicHillParameterName =
  | 'e0'
  | 'em'
  | 'emid1'
  | 'h1'
  | 'emax'
  | 'emid2'
  | 'h2'



export interface Parameter<T> {
  name: T
  interval: FactorInterval
  value: number
  tex: string
}

export type BiphasicHillThetaValues=BiphasicHillTheta<number>
export type BiphasicHillParameter =  Parameter<BiphasicHillParameterName>

export interface BiphasicHillTheta<T = BiphasicHillParameter>  {
  e0: T
  em: T
  emid1: T
  h1: T
  emax: T
  emid2: T
  h2: T


}



export function biphasicHillThetaExample( ): BiphasicHillTheta {
  const zero1000: FactorInterval = {min: 0, step: 0.1, max: 1000}
  const intervalEm = {... zero1000, min: 0.1}
  const intervalHill: FactorInterval =  { min: 0, step: 0.1, max: 10 }

  return   {
    e0: { name: 'e0', interval: zero1000, tex: 'A_0', value: 10},
    em: { name: 'em', interval: intervalEm, tex: 'A_{\\infty}', value: 131.4},
    emid1: { name: 'emid1', interval: intervalEm, tex: 'A_{50}', value: 10},
    h1: { name: 'h1', interval: intervalHill, tex: '\\alpha', value: 10},
    emax: { name: 'emax', interval: zero1000, tex: 'B_{\\infty}', value: 10},
    emid2: { name: 'emid2', interval: intervalEm, tex: 'B_{50}', value: 10},
    h2: { name: 'h2', interval: intervalHill, tex: '\\beta', value: 10}
  }}
