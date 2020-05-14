import {Component} from '@angular/core';
import {PlotService} from '../services/plot.service';
import {Observable} from 'rxjs';
import {DosingService} from '../services/dosing.service';
import {FormGroup} from '../../../utils/forms.utils';
import {DosingModel} from '../../../store/app.model';

@Component({
  selector: 'fx-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})
export class PlotComponent {
  plotlyConfig = { displayModeBar: false }
  showSlave$: Observable<boolean>

  doseForm: FormGroup<DosingModel>
  constructor(public plotService: PlotService, public dosingService: DosingService) {
    this.showSlave$ = plotService.showSlave.allValueChanges()
    this.doseForm = this.dosingService.dosingForm
    }

    get twoDosesControl(){
    return this.doseForm.get('twoDoses')
    }



}
