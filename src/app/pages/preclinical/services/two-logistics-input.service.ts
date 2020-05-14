import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup} from '../../../utils/forms.utils';
import {BiHillTheta} from '../../../models/biphasic-hill.model';
import {Store} from '@ngxs/store';
import {AppState} from '../../../store/app.state';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {ChangedPreclinicalTheta} from '../../../store/actions';

@Injectable()
export class TwoLogisticsInputService {

  form: FormGroup<BiHillTheta>
  constructor(private store: Store, fb: FormBuilder) {
    const initTheta = this.store.selectSnapshot(AppState.twoLogsTheta)
    this.form = fb.group<BiHillTheta>(initTheta)

    this.form.allValueChanges().subscribe(value => this.thetaUpdated(value))
  }
  @Dispatch()
  thetaUpdated(data: BiHillTheta){
    return new ChangedPreclinicalTheta(data)
  }


}
