import {TwoLogsModel} from './theta.model';
import {TwoLogsTheta} from './definitions.models';


export function twoLogModelOld(theta: TwoLogsModel, x: number ): number {
  const t = theta.parameters;
  const first = t.emax1 / (1 + (t.emid1 / x) ** t.h1);
  const second = t.emax2 / (1 + (t.emid2 / x) ** t.h2);

  return first * second; }


export function twoLogModel(t: TwoLogsTheta, x: number ): number {

  const first = t.emax1.value / (1 + (t.emid1.value  / x) ** t.h1.value );
  const second = t.emax2.value  / (1 + (t.emid2.value  / x) ** t.h2.value );

  return first * second; }



