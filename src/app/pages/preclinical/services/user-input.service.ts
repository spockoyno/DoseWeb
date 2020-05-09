import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from '../../../utils/forms.utils';
import {TwoLogTheta} from '../../../models/two-logs.model';
import {Store} from '@ngxs/store';
import {AppState} from '../../../store/app.state';

@Injectable()
export class UserInputService {

  form: FormGroup<TwoLogTheta>
  constructor( private store: Store, fb: FormBuilder) {
const initTheta = this.store.selectSnapshot(AppState.preclinical).thetaTwoLogsInput



  }
}
