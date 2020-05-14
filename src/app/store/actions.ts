import {BiHillTheta} from '../models/biphasic-hill.model';

export class ChangedPreclinicalTheta{

  static type: '[Preclinical] Theta'
  constructor(public value: BiHillTheta) {
  }
}
