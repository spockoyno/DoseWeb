import { Injectable } from '@angular/core';
import {DosingModel} from '../../../store/app.model';
import {FormBuilder, FormGroup} from '../../../utils/forms.utils';
import {Store} from '@ngxs/store';
import {AppState} from '../../../store/app.state';

@Injectable()
export class DosingService {
  dosingForm: FormGroup<DosingModel>
  constructor(store: Store, fb: FormBuilder) {
    const initDoses = store.selectSnapshot(AppState.dosingModel)
    this.dosingForm = fb.group<DosingModel>({twoDoses: [initDoses.twoDoses]})
  }
}
