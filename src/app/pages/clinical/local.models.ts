import {ThetaSpec} from '../../models/common';
import {NumberInputSpec} from '../../components/components.models';

export interface KappaInputSpecs  {

  lowSlider: ThetaSpec,
  upSlider: ThetaSpec,
  kappaAssumed: NumberInputSpec
}
