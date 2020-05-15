import {Component} from '@angular/core';
import {PlotService} from '../services/plot.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'fx-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})
export class PlotComponent {
  plotlyConfig = { displayModeBar: false }
  showSlave$: Observable<boolean>


  constructor(public plotService: PlotService) {
    this.showSlave$ = plotService.showSlave.allValueChanges()

    }
}
