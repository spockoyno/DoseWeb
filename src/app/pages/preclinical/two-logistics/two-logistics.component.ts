import {Component} from '@angular/core';
import {TwoLogisticsInputService} from '../services/two-logistics-input.service';

@Component({
  selector: 'fx-two-logistics',
  templateUrl: './two-logistics.component.html',
  styleUrls: ['./two-logistics.component.scss']
})
export class TwoLogisticsComponent  {

  constructor(public input: TwoLogisticsInputService) { }



}
