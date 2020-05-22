import {BiHillThetaSpec} from '../models/biphasic-hill.model';
import {ClinicalModel, KappaModel} from './app.model';

export class ChangedPreclinicalTheta{

  static readonly type: '[Preclinical] Theta'
  constructor(public value: BiHillThetaSpec) {
  }
}

export class ChangedKappaInput{

  static readonly type: '[KappaInput] Kappa Input'
  constructor(public value: KappaModel) {
  }
}

export class ChangedClinicalModel{

  static readonly type: '[Clinical] modelValue'
  constructor(public value: ClinicalModel) {
    console.log('Changed CLinical constructor')
  }
}
