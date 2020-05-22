import {ThetaSpec} from './common';


export type BiHillThetaTex = BiHillTheta<string>
export type BiHillThetaSpec = BiHillTheta<ThetaSpec>

export interface BiHillTheta<T > {
  e0: T
  em: T
  emid1: T
  h1: T
  emax: T
  emid2: T
  h2: T
}

export const twoLogs_THETA: BiHillThetaSpec = {
  e0: { min: 0, step: 0.1, val: 10, max: 1000 },
  em: { min: 0.1, step: 0.1, val: 131.4, max: 1000 },
  emid1: { min: 0.1, step: 0.1, val: 15.3, max: 1000 },
  h1: { min: 0, step: 0.1, val: 6.2, max: 10 },
  emax: { min: 0, step: 0.1, val: 28.6, max: 1000 },
  emid2: { min: 0.1, step: 0.1, val: 310, max: 1000 },
  h2: { min: 0, step: 0.1, val: 2.2, max: 10 },
}


export const twoLogsTheta_TEX: BiHillThetaTex = {
  e0: 'A_0',
  em: 'A_{\\infty}',
  emid1: 'A_{50}',
  h1: '\\alpha',
  emax: 'B_{\\infty}',
  emid2: 'B_{50}',
  h2: '\\beta',
}

export const biHillModel_TEX =
  '\\left(A_0 + \\frac{A_{\\infty} -A_0}{1+(A_{50}/x)^{\\alpha}}\\right) \\times \\left(  A_{\\infty}+ \\frac{B_{\\infty} -A_{\\infty}}{1+(B_{50}/x)^{\\beta}}\\right)/A_{\\infty}'

export const biHillModel_TEX_A =
  'E_p = \\left(A_0 + \\frac{A_{\\infty} -A_0}{1+(A_{50}/x)^{\\alpha}}\\right)'
export const biHillModel_TEX_B =
  '\\qquad\\times \\left(  A_{\\infty}+ \\frac{B_{\\infty} -A_{\\infty}}{1+(B_{50}/x)^{\\beta}}\\right)/A_{\\infty}'


export const biHillModel_Clinical =
  'E_c\\propto (\\kappa A_{50}/x)^{\\alpha},\\,(\\kappa B_{50}/x)^{\\beta}'


