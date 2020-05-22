import {Component} from '@angular/core';
import {BiphasicHillEtaService} from './services/biphasic-hill-eta.service';
import {BiphasicHillTheta} from '../../models/common';

@Component({
  selector: 'fx-eta-explorer',
  templateUrl: './eta-explorer.component.html',
  styleUrls: ['./eta-explorer.component.scss']
})
export class EtaExplorerComponent  {

  initial: BiphasicHillTheta
  constructor(public biphasicService: BiphasicHillEtaService) {
    this.initial= this.biphasicService.biHillTheta

  }



}
