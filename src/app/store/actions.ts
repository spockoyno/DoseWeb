import {BiHillThetaSpec} from '../models/biphasic-hill.model';
import {ClinicalModel, KappaModel} from './state/app.model';
import {BiphasicHillParameter} from '../models/common';
import {DummyOneModel, DummyTwoModel} from './state/dummy.state.model';


export class PutBiHillParameter{

  static readonly type: '[Etas] Bi Hill Theta parameter'
  constructor(public value: BiphasicHillParameter) {
  }
}

export class PutDummyOne{

  static readonly type: '[Etas] dummy one'
  constructor(public value: DummyOneModel) {
  }
}


export class PutDummyTwo{

  static readonly type: '[Etas] dummy two'
  constructor(public value: DummyTwoModel) {
  }
}


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
