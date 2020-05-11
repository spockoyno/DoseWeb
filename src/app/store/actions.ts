import {TwoLogsTheta} from '../models/theta-two-logs.models';

export class ChangedPreclinicalTheta{

  static type: '[Preclinical] Theta'
  constructor(public value: TwoLogsTheta) {
  }
}
