import {Component} from '@angular/core';
import {TwoLogisticsInputService} from '../services/two-logistics-input.service';
import {BiHillThetaTex, twoLogsTheta_TEX} from '../../../models/biphasic-hill.model';

@Component({
  selector: 'fx-two-logistics',
  templateUrl: './two-logistics.component.html',
  styleUrls: ['./two-logistics.component.scss']
})
export class TwoLogisticsComponent  {

  tex: BiHillThetaTex = twoLogsTheta_TEX
  constructor(public input: TwoLogisticsInputService) { }



}

