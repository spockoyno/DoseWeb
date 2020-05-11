import {Component, Input} from '@angular/core';
import {FormGroup} from '../../../utils/forms.utils';
import {ThetaSpec} from '../../../models/theta.models';
import {MatSliderChange} from '@angular/material/slider';

@Component({
  selector: 'fx-theta-row',
  templateUrl: './theta-row.component.html',
  styleUrls: ['./theta-row.component.scss']
})
export class ThetaRowComponent  {

  @Input() form: FormGroup<ThetaSpec>
 @Input() thetaName: string = ''


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
