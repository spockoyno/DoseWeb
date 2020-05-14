import {Component} from '@angular/core';
import {KatexOptions} from 'ng-katex';
import {biHillModel_TEX_A, biHillModel_TEX_B} from '../../models/biphasic-hill.model';

@Component({
  selector: 'fx-preclinical',
  templateUrl: './preclinical.component.html',
  styleUrls: ['./preclinical.component.scss']
})
export class PreclinicalComponent {

  equationVisible = false
  options: KatexOptions = {
    displayMode: true,
  }


  equation_A = biHillModel_TEX_A
  equation_B = biHillModel_TEX_B

  formulaClicked() {
    this.equationVisible = !this.equationVisible
  }
}
