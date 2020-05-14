import {clinicalTwoLogsTheta_CORRECTED, BiHillTheta} from './biphasic-hill.model';
import {FactorInterval} from './common';
import {CedergreenTheta} from './cedergreen.model';

//from JSFit paper, eq. 4
export function biHillModel(t: BiHillTheta, x: number ): number {



  const inhib = t.e0.value + (t.em.value-t.e0.value)/( 1 + (t.emid1.value/x)**t.h1.value)
  const stim =  t.em.value + (t.emax.value -t.em.value)/ (1 + (t.emid2.value/x)**t.h2.value)

  return stim * inhib/ t.em.value }


//from JSFit paper, eq. 2
export function biHillDownModel(t: BiHillTheta, x: number ): number {



  return  t.e0.value + (t.em.value-t.e0.value)/( 1 + (t.emid1.value/x)**t.h1.value) }

//from JSFit paper, eq. 3
export function biHillUpModel(t: BiHillTheta, x: number ): number {


  return   t.em.value + (t.emax.value -t.em.value)/ (1 + (t.emid2.value/x)**t.h2.value)

   }


//stop-gap function with correction to parameters
export function biHillModelCorrected(t: BiHillTheta, x: number ): number {

  const a = clinicalTwoLogsTheta_CORRECTED

  const inhib = t.e0.value*a.e0 + (t.em.value*a.em-t.e0.value*a.e0)/( 1 + (t.emid1.value*a.emid1/x)**t.h1.value*a.h1)
  const stim =  t.em.value*a.em + (t.emax.value*a.emax -t.em.value*a.em)/ (1 + (t.emid2.value*a.emid2/x)**t.h2.value*a.h2)

  return stim * inhib/ t.em.value*a.em }



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


