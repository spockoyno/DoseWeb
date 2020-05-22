import {Component} from '@angular/core';
import {DEFAULT_STEPS, PageStep} from '../navigator.model';

@Component({
  selector: 'fx-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent  {
  steps: PageStep[]= DEFAULT_STEPS
  constructor() { }

}
