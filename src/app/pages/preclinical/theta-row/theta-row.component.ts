import {Component, Input} from '@angular/core';
import {FormGroup} from '../../../utils/forms.utils';
import {MatSliderChange} from '@angular/material/slider';
import {ThetaSpec} from '../../../models/common';
import {KatexOptions} from 'ng-katex';

@Component({
  selector: 'fx-theta-row',
  templateUrl: './theta-row.component.html',
  styleUrls: ['./theta-row.component.scss']
})
export class ThetaRowComponent  {

  options: KatexOptions = {
    displayMode: true,
  }
  @Input() form: FormGroup<ThetaSpec>
 @Input() thetaNameTex: string = ''


  get specs(){
    return this.form.value
  }


  sliderChanged($event: number) {


    const current: ThetaSpec = this.form.value

    this.form.setValue({... current, value: $event}, {onlySelf: false,
      emitEvent: true})
  }


changed($event: MatSliderChange){
    console.log($event.value)

}
}
