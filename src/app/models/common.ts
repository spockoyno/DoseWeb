import {Plotly} from 'angular-plotly.js/src/app/shared/plotly.interface';

export type LayoutPlotly = Partial<Plotly.Layout>

export interface FactorInterval {
  min: number;
  max: number;
  step: number
}

export interface ThetaSpec {
  min: number;
  max: number;
  step: number
  value: number
}
