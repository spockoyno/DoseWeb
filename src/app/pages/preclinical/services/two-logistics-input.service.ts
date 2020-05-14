import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from '../../../utils/forms.utils';
import {TwoLogsTheta} from '../../../models/theta-two-logs.models';
import {Store} from '@ngxs/store';
import {AppState} from '../../../store/app.state';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {ChangedPreclinicalTheta} from '../../../store/actions';

@Injectable()
export class TwoLogisticsInputService {

  form: FormGroup<TwoLogsTheta>
  constructor(private store: Store, fb: FormBuilder) {
    const initTheta = this.store.selectSnapshot(AppState.twoLogsTheta)
    this.form = fb.group<TwoLogsTheta>(initTheta)

    this.form.allValueChanges().subscribe(value => this.thetaUpdated(value))
  }
  @Dispatch()
  thetaUpdated(data: TwoLogsTheta){
    return new ChangedPreclinicalTheta(data)
  }


}
