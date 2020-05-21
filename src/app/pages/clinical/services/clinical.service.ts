import { Injectable } from '@angular/core';
import {ClinicalModel, DoseModel, KappaModel} from '../../../store/app.model';
import {FormBuilder, FormGroup} from '../../../utils/forms.utils';
import {Store} from '@ngxs/store';
import {AppState} from '../../../store/app.state';
import {NumberInputSpec} from '../../../components/components.models';
import {KappaInputSpecs} from '../local.models';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {ChangedClinicalModel, ChangedKappaInput} from '../../../store/actions';
import {delay} from 'rxjs/operators';

@Injectable()
export class ClinicalService {
  form: FormGroup<ClinicalModel>
  constructor(private store: Store, fb: FormBuilder) {
    const init = this.store.selectSnapshot(AppState.clinicalModel)

    console.log(init)
    this.form = fb.group<ClinicalModel>({
      dosesPreclinicalScale: fb.group<DoseModel>(init.dosesPreclinicalScale),
      minimumResponseTarget: init.minimumResponseTarget,
      kappaModel: fb.group<KappaModel>(init.kappaModel)

    })

    this.form.valueChanges.pipe(delay(0)).subscribe(value => {
      console.log('CLINICAL FORM TRIGGERED')
      console.log('Clinical Service ')
      console.log(value)
     this.store.dispatch(new ChangedClinicalModel(value))
    })


  }
  @Dispatch()
kappaModelUpdate(data: KappaModel){
 return     new ChangedKappaInput(data)
  }

  @Dispatch()
  modelUpdate(data: ClinicalModel){
    return new ChangedClinicalModel(data)
  }

 get minimumResponseTargetSpec(): NumberInputSpec{
    return {
      isInteger: false,
      min: 0,
      max: 10000000,
      isRequired: true, displayedMinimum: 0,
      step: undefined
    }
 }

get doseModel(): FormGroup<DoseModel>{

    return this.form.get('dosesPreclinicalScale') as FormGroup<DoseModel>
 }
 get doseSpec(): NumberInputSpec{

    const interval = this.store.selectSnapshot(AppState.dosingInterval)
    return {
      isInteger: false,
      min: interval.min,
      max: interval.max,
      isRequired: false, displayedMinimum: interval.min,
      step: undefined
    }
 }

 get kappaInputSpecs(): KappaInputSpecs{


    const assumed: NumberInputSpec = {
      isInteger: false,
      min: 1,
      max: 100,
      isRequired: true, displayedMinimum: 1,
      step: undefined

    }

    return {
      kappaAssumed: assumed,
      lowSlider: {min: 0.1, max: 1, step: 0.01, val: 1},
      upSlider: {min: 1, max: 100, step: 1, val: 1}
    }
 }


}

