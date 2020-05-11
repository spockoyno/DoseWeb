import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from '../../../utils/forms.utils';
import {TwoLogsTheta} from '../../../models/definitions.models';
import {Store} from '@ngxs/store';
import {AppState} from '../../../store/app.state';

@Injectable()
export class TwoLogisticsInputService {

  form: FormGroup<TwoLogsTheta>
  constructor(private store: Store, fb: FormBuilder) {
    const initTheta = this.store.selectSnapshot(AppState.twoLogsTheta)
    this.form = fb.group<TwoLogsTheta>(initTheta)
  }
}
