import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SliderInputModel} from '../components.models';
import {MatSliderChange} from '@angular/material/slider';

@Component({
  selector: 'fx-slider-input',
  templateUrl: './slider-input.component.html',
  styleUrls: ['./slider-input.component.scss']
})
export class SliderInputComponent  {

@Input()spec: SliderInputModel;
  @Input() id = '';

@Output()newValue: EventEmitter<{ id: string, value: number }> = new EventEmitter<{id: string, value: number}>();

  sliderUpdated($event: MatSliderChange) {

  const value = $event.value ?? Number.NaN;
  this.newValue.emit({id: this.id, value});
  }
}
