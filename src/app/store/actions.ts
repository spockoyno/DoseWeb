import {TwoLogsTheta} from '../models/theta.models';

export class ChangedPreclinicalTheta{

  static type: '[Preclinical] Theta'
  constructor(public value: TwoLogsTheta) {
  }
}
