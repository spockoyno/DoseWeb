import {ThetaSpec} from './common';

export interface CedergreenTheta {
  a: ThetaSpec
  b: ThetaSpec
  c: ThetaSpec
  d: ThetaSpec
  e: ThetaSpec
  f: ThetaSpec

}

export const ceder_THETA: CedergreenTheta = {
  a: {min: -10, step: 0.1, value: 0.5, max: 10},
  b: {min: 0.1, step: 0.1, value: 10, max: 100},
  c: {min: 0, step: 0.1, value: 100, max: 1000},
  d: {min: 0, step: 1, value: 0, max: 1000},
  e: {min: 0.1, step: 1, value: 20, max: 100},
  f: {min: 0, step: 0.25, value: 1, max: 100},

};
