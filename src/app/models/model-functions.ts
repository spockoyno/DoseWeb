import {TwoLogTheta} from './two-logs.model';

export function twoLogModel(t: TwoLogTheta, x: number ): number {
  const first = t.emax_1/(1 + (t.emid_1/x)**t.h_1)
  const second = t.emax_2/(1 + (t.emid_2/x)**t.h_2)

  return first*second }



