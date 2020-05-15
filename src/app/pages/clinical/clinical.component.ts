import {Component} from '@angular/core';
import {ClinicalService} from './services/clinical.service';

@Component({
  selector: 'fx-clinical',
  templateUrl: './clinical.component.html',
  styleUrls: ['./clinical.component.scss']
})
export class ClinicalComponent {

  inputWidth = 12
  constructor(public service: ClinicalService) { }



}
