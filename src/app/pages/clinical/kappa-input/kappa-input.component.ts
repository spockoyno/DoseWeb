import {Component} from '@angular/core';
import {ClinicalService} from '../services/clinical.service';
import {KappaInputSpecs} from '../local.models';
import {FormGroup} from '../../../utils/forms.utils';
import {MatSliderChange} from '@angular/material/slider';
import {KappaModel} from '../../../store/app.model';

@Component({
  selector: 'fx-kappa-input',
  templateUrl: './kappa-input.component.html',
  styleUrls: ['./kappa-input.component.scss']
})
export class KappaInputComponent  {
 specs: KappaInputSpecs

  kappaForm: FormGroup<KappaModel>
  constructor(private service: ClinicalService) {
   this.specs = this.service.kappaInputSpecs

    this.kappaForm = this.service.form.get('kappaModel') as FormGroup<KappaModel>

  }


  lowSliderChanged($event: MatSliderChange) {

    const value    = $event.value
    if (value ===null){ return}
    const current: KappaModel = {...this.kappaForm.getRawValue(), kappaMultipleDown: value}
    this.kappaForm.setValue(current, {onlySelf: false,
      emitEvent: true})


  }


  upSliderChanged($event: MatSliderChange) {
    const value    = $event.value
    if (value ===null){ return}
    const current: KappaModel = {...this.kappaForm.getRawValue(), kappaMultipleUp: value}
    this.kappaForm.setValue(current, {onlySelf: false,
      emitEvent: true})

  }
}
