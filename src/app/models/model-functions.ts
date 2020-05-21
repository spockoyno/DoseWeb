import {BiHillThetaSpec} from './biphasic-hill.model';
import {FactorInterval} from './common';
import {CedergreenTheta} from './cedergreen.model';

//from JSFit paper, eq. 4
export function biHillModelValues(t: BiHillThetaSpec, x: number ): number {



  const inhib = t.e0.val + (t.em.val-t.e0.val)/( 1 + (t.emid1.val/x)**t.h1.val)
  const stim =  t.em.val + (t.emax.val -t.em.val)/ (1 + (t.emid2.val/x)**t.h2.val)

  return stim * inhib/ t.em.val }





export function cedergreenModel(t: CedergreenTheta, x: number ):number {
const   numer = t.d.val - t.c.val + t.f.val * Math.exp(-1/(x**t.a.val))
  const   denom = 1 + Math.exp(t.b .val* (Math.log(x) - Math. log(t.e.val)))
  return  t.c.val + numer/denom}


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


