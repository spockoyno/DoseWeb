import {Component, Input} from '@angular/core';
import {ThetaElementInput} from '../../../models/ui.models';
import {FormGroup} from '../../../utils/forms.utils';

@Component({
  selector: 'fx-element-input',
  templateUrl: './element-input.component.html',
  styleUrls: ['./element-input.component.scss'],

})
export class ElementInputComponent {

  @Input() form: FormGroup<ThetaElementInput>

get options(){
    return this.form.value
}


  sliderChanged($event: number) {
    this.form.get('value').setValue($event)
  }
}
