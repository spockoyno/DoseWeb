import { Component, OnInit } from '@angular/core';
import {PlotService} from '../services/plot.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'fx-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})
export class PlotComponent implements OnInit {
  plotlyConfig = { displayModeBar: false }
  showSlave$: Observable<boolean>
  constructor(public service: PlotService) {
    this.showSlave$ = service.showSlave.allValueChanges()
  }

  ngOnInit(): void {
  }

}
