import {FormControl} from '../../utils/forms.utils';

export interface ElementInput {
  display: string
  parameterKey: string
  step: number
  min: number
  max: number
  control: FormControl<number>
}
