import {clinicalTwoLogsTheta_CORRECTED, TwoLogsTheta} from './theta-two-logs.models';
import {FactorInterval} from './common';
import {CedergreenTheta} from './cedergreen.model';


export function twoLogModelOld(t: TwoLogsTheta, x: number ): number {

  const first = t.em.value / (1 + (t.emid1.value  / x) ** t.h1.value );
  const second = t.emax.value  / (1 + (t.emid2.value  / x) ** t.h2.value );

  return first * second; }

export function twoLogModelNu(t: TwoLogsTheta, x: number ): number {

  const first = 1/( 1 + (t.emid1.value/x)**t.h1.value)
  const second =  t.emax.value + (t.em.value -t.emax.value)/ (1 + (t.emid2.value/x)**t.h2.value)


  return first * second; }

export function twoLogModelZero(t: TwoLogsTheta, x: number ): number {



  const inhib = t.e0.value + (t.em.value-t.e0.value)/( 1 + (t.emid1.value/x)**t.h1.value)
  const stim =  t.em.value + (t.emax.value -t.em.value)/ (1 + (t.emid2.value/x)**t.h2.value)

  return stim * inhib/ t.em.value }

export function twoLogModelMult(t: TwoLogsTheta, x: number ): number {

  const a = clinicalTwoLogsTheta_CORRECTED

  const inhib = t.e0.value*a.e0 + (t.em.value*a.em-t.e0.value*a.e0)/( 1 + (t.emid1.value*a.emid1/x)**t.h1.value*a.h1)
  const stim =  t.em.value*a.em + (t.emax.value*a.emax -t.em.value*a.em)/ (1 + (t.emid2.value*a.emid2/x)**t.h2.value*a.h2)

  return stim * inhib/ t.em.value*a.em }


export function twoLogModel(t: TwoLogsTheta, x: number ): number {

  const first = t.em.value / (1 + (t.emid1.value  / x) ** t.h1.value );
  const second = t.emax.value  / (1 + (t.emid2.value  / x) ** t.h2.value );

  return first * second; }

export function cedergreenModel(t: CedergreenTheta, x: number ):number {
const   numer = t.d.value - t.c.value + t.f.value * Math.exp(-1/(x**t.a.value))
  const   denom = 1 + Math.exp(t.b .value* (Math.log(x) - Math. log(t.e.value)))
  return  t.c.value + numer/denom}


export function gridInclusive(d: FactorInterval): number[] {
  const ans = []

  let cur = d.min

  while (cur < d.max) {
    ans.push(cur)
    cur += d.step
  }

  ans.push(d.max)
  return ans
}


