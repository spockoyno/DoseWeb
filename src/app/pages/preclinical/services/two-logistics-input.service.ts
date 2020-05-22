import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '../../../utils/forms.utils';
import {BiHillThetaSpec} from '../../../models/biphasic-hill.model';
import {Store} from '@ngxs/store';
import {AppState} from '../../../store/state/app.state';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {ChangedPreclinicalTheta} from '../../../store/actions';

@Injectable()
export class TwoLogisticsInputService {

  form: FormGroup<BiHillThetaSpec>
  constructor(private store: Store, fb: FormBuilder) {
    const initTheta = this.store.selectSnapshot(AppState.twoLogsTheta)
    this.form = fb.group<BiHillThetaSpec>(initTheta)

    this.form.allValueChanges().pipe().subscribe(value => setTimeout(()=>{return this.store.dispatch(new ChangedPreclinicalTheta(value))}))
  }
  @Dispatch()
  thetaUpdated(data: BiHillThetaSpec){
    console.log('TwoLogisticsInput')
    console.log(data)
    return new ChangedPreclinicalTheta(data)
  }


}
