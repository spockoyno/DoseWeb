import {BiHillThetaSpec} from '../models/biphasic-hill.model';
import {ClinicalModel, KappaModel} from './app.model';

export class ChangedPreclinicalTheta{

  static type: '[Preclinical] Theta'
  constructor(public value: BiHillThetaSpec) {
  }
}

export class ChangedKappaInput{

  static type: '[KappaInput] Kappa Input'
  constructor(public value: KappaModel) {
  }
}

export class ChangedClinicalModel{

  static type: '[Clinical] modelValue'
  constructor(public value: ClinicalModel) {
    console.log('Changed CLinical constructor')
  }
}
