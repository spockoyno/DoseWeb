import {CedergreenTheta, FactorInterval, TwoLogsTheta} from './theta.models';


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

