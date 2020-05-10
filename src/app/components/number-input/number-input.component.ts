import {Component, Input} from '@angular/core';

import {validationErrorsFromControl} from '../../utils/ui.utils';
import {FormControl} from '../../utils/forms.utils';
import {NUMBER_INPUT_WIDTH, NumberInputSpec, tooltip_DELAY} from '../components.models';


@Component({
  selector: 'fx-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent {
  @Input() spec: NumberInputSpec;
@Input() inputWidth = NUMBER_INPUT_WIDTH;
  @Input() hideRequiredMarker = false;
 @Input() placeholder = '';
  @Input() control: FormControl<number>;
  @Input() isInputDisabled = false;

  @Input() tooltipDelay: number = tooltip_DELAY;
  @Input() tooltip = '';

  get validationErrors(): string[] {
    return validationErrorsFromControl(this.control);
  }

  get step() {
    if (this.spec.step !== undefined) {
      return this.spec.step.toString();
    }
    return this.spec.isInteger ? '1' : 'any';
  }

}
