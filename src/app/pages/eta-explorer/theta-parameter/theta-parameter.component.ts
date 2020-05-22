import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BiphasicHillParameter} from '../../../models/common';
import {KatexOptions} from 'ng-katex';
import {MatSliderChange} from '@angular/material/slider';

@Component({
  selector: 'fx-theta-parameter',
  templateUrl: './theta-parameter.component.html',
  styleUrls: ['./theta-parameter.component.scss']
})
export class ThetaParameterComponent  {

  options: KatexOptions = {
    displayMode: true,
  }
 @Input() parameter: BiphasicHillParameter
  @Output() updatedParameter: EventEmitter<BiphasicHillParameter> = new EventEmitter<BiphasicHillParameter>()

currentSliderValue: string = ''

  sliderChanged($event: MatSliderChange) {
    const value = $event.value
    if(value===null){
      return
    }
    this.currentSliderValue= value.toString()


    this.updatedParameter.emit({...this.parameter,value: value})

  }
}
