import { ThetaSpec } from './common'

export type BiHillThetaValues = BiHillTheta<number>
export type BiHillThetaTex = BiHillTheta<string>

export interface BiHillTheta<T = ThetaSpec> {
  e0: T
  em: T
  emid1: T
  h1: T
  emax: T
  emid2: T
  h2: T
}

export const twoLogs_THETA_old: BiHillTheta = {
  e0: { min: 0, step: 0.1, value: 10, max: 1000 },
  em: { min: 0.1, step: 0.1, value: 100, max: 1000 },
  emid1: { min: 0.1, step: 0.1, value: 10, max: 1000 },
  h1: { min: 0, step: 0.1, value: 0.5, max: 10 },
  emax: { min: 0, step: 0.1, value: 100, max: 1000 },
  emid2: { min: 0.1, step: 0.1, value: 20, max: 1000 },
  h2: { min: 0, step: 0.1, value: 1, max: 10 },
}

export const twoLogs_THETA: BiHillTheta = {
  e0: { min: 0, step: 0.1, value: 10, max: 1000 },
  em: { min: 0.1, step: 0.1, value: 131.4, max: 1000 },
  emid1: { min: 0.1, step: 0.1, value: 15.3, max: 1000 },
  h1: { min: 0, step: 0.1, value: 6.2, max: 10 },
  emax: { min: 0, step: 0.1, value: 28.6, max: 1000 },
  emid2: { min: 0.1, step: 0.1, value: 310, max: 1000 },
  h2: { min: 0, step: 0.1, value: 2.2, max: 10 },
}

export const clinicalTwoLogsTheta_CORRECTED: BiHillThetaValues = {
  e0: 1.2,
  em: 1.2,
  emid1: 1.2,
  h1: 1.1,
  emax: 1.2,
  emid2: 1.2,
  h2: 0.8,
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
  'E = \\left(A_0 + \\frac{A_{\\infty} -A_0}{1+(A_{50}/x)^{\\alpha}}\\right)'
export const biHillModel_TEX_B =
  '\\quad\\times \\left(  A_{\\infty}+ \\frac{B_{\\infty} -A_{\\infty}}{1+(B_{50}/x)^{\\beta}}\\right)/A_{\\infty}'
