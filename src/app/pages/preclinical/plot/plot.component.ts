import { Component, OnInit } from '@angular/core';
import {PlotService} from '../services/plot.service';

@Component({
  selector: 'fx-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss']
})
export class PlotComponent implements OnInit {
  plotlyConfig = { displayModeBar: false }
  constructor(public service: PlotService) { }

  ngOnInit(): void {
  }

}
