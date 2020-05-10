import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '../../../utils/forms.utils';
import {Store} from '@ngxs/store';
import {AppState} from '../../../store/app.state';
import {ModelParameterInputs, ThetaElementInput} from '../../../models/ui.models';

@Injectable()
export class UserInputService {
  form: FormGroup<ModelParameterInputs>
  constructor(private store: Store, fb: FormBuilder) {
    const initTheta = this.store.selectSnapshot(AppState.preclinical)

    this.form = fb.group<ModelParameterInputs>({
      modelType: initTheta.modelType,
      parameters: fb.array<ThetaElementInput>(
        initTheta.parameters.map((value) => fb.group<ThetaElementInput>(value))
      ),
    })
  }

  get parameterArray(): FormGroup<ThetaElementInput>[] {

    return this.form.get('parameters').controls as FormGroup<ThetaElementInput>[]
  }


}
