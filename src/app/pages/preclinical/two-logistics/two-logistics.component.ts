import {Component} from '@angular/core';
import {TwoLogisticsInputService} from '../services/two-logistics-input.service';
import {twoLogsTheta_TEX, TwoLogsThetaTex} from '../../../models/theta-two-logs.models';

@Component({
  selector: 'fx-two-logistics',
  templateUrl: './two-logistics.component.html',
  styleUrls: ['./two-logistics.component.scss']
})
export class TwoLogisticsComponent  {

  tex: TwoLogsThetaTex = twoLogsTheta_TEX
  constructor(public input: TwoLogisticsInputService) { }



}

