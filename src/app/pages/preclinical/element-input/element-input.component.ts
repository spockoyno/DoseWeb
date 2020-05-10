import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {ElementInput} from '../local.models';
import {Options} from 'ng5-slider';

@Component({
  selector: 'fx-element-input',
  templateUrl: './element-input.component.html',
  styleUrls: ['./element-input.component.scss'],

})
export class ElementInputComponent  implements OnInit{

  @Input() spec: ElementInput


  options: Options = {
    floor: 0,
    ceil: 200,
    step: 0.25,


  }



  ngOnInit(): void {
    window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);

  }


}
