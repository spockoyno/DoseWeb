import {Injectable} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from '../../../utils/forms.utils';
import {Store} from '@ngxs/store';
import {AppState} from '../../../store/app.state';
import {ModelParameterInputs, ParameterInput} from '../../../models/ui.models';
import {ElementInput} from '../local.models';

@Injectable()
export class UserInputService {
  form: FormGroup<ModelParameterInputs>
  constructor(private store: Store, fb: FormBuilder) {
    const initTheta = this.store.selectSnapshot(AppState.preclinical)

    this.form = fb.group<ModelParameterInputs>({
      modelType: initTheta.modelType,
      parameters: fb.array<ParameterInput>(
        initTheta.parameters.map((value) => fb.group<ParameterInput>(value))
      ),
    })
  }

  get parameterArray(): FormArray<ParameterInput> {
    // @ts-ignore
    return this.form.controls.parameters
  }

  parameterRowInput(control: AbstractControl<ParameterInput>): ElementInput {
    const d = control.value

    const ct=(control as FormGroup<ParameterInput>).controls.value as FormControl<number>
    return {
      display: d.display,
      min: d.interval.min,
      max: d.interval.max,
      step: 0.1,
      parameterKey: d.parameterKey,
      control: ct
    }
  }
}
