import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Data} from '@angular/router';
import {Store} from '@ngxs/store';
import {AppState} from '../../../store/app.state';
import {PreclinicalPlotData} from '../../../store/app.model';
import {LayoutPlotly} from '../../../models/common';

@Injectable()
export class PlotService {
  layout: LayoutPlotly
  masterPlot$: BehaviorSubject<Data[]>
  constructor(store: Store) {
    const init = store.selectSnapshot(AppState.preclinicalPlot)
    this.masterPlot$ = new BehaviorSubject<Data[]>(trace(init))
    store.select(AppState.preclinicalPlot).subscribe(value =>
    this.masterPlot$.next(trace(value)))

    this.layout = makeMasterLayout()

  }
}


function trace(data: PreclinicalPlotData): Data[]{

  const line = {
    x: data.dose,
    y: data.response,
    mode: 'lines',
    line: {width: 4}
  } as Data
  return [line]
}


export function makeMasterLayout() {
  const margin = 10
  return {
    width: 600,
    height: 250,
    xaxis: {
      title: '<b>Dose </b>',
      automargin: true
    },
    yaxis: {
      title: '<b>Response </b>',
      automargin: true
    },
    autosize: false,
    showlegend: false,
 title: "PRECLINICAL MODEL",
    margin: {
      l: 30,
      r: margin,
      b: 30,
      t: 30,
      pad: 5
    },


    hovermode: 'closest',
    displaylogo: false,
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
  } as LayoutPlotly
}
