import {BiHillThetaSpec} from './biphasic-hill.model';
import {FactorInterval} from './common';

//from JSFit paper, eq. 4
export function biHillModelValues(t: BiHillThetaSpec, x: number ): number {



  const inhib = t.e0.val + (t.em.val-t.e0.val)/( 1 + (t.emid1.val/x)**t.h1.val)
  const stim =  t.em.val + (t.emax.val -t.em.val)/ (1 + (t.emid2.val/x)**t.h2.val)

  return stim * inhib/ t.em.val }







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


