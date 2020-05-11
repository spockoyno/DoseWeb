import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Data} from '@angular/router';
import {Store} from '@ngxs/store';
import {AppState} from '../../../store/app.state';
import {PreclinicalPlotData} from '../../../store/app.model';
import {LayoutPlotly} from '../../../models/common';

@Injectable()
export class PlotService {
  masterLayout: LayoutPlotly
  masterPlot$: BehaviorSubject<Data[]>
  slaveLayout: LayoutPlotly
 slavePlot$: BehaviorSubject<Data[]>

  constructor(store: Store) {
    const initMaster = store.selectSnapshot(AppState.preclinicalPlot)
    this.masterPlot$ = new BehaviorSubject<Data[]>(trace(initMaster, '#ee6677'))
    store.select(AppState.preclinicalPlot).subscribe(value =>
    this.masterPlot$.next(trace(value, '#ee6677')))

    this.masterLayout = makeMasterLayout()

  const initSlave = store.selectSnapshot(AppState.clinicalPlot)
    this.slavePlot$ = new BehaviorSubject<Data[]>(trace(initSlave, '#4477aa'))
    store.select(AppState.clinicalPlot).subscribe(value =>
    this.slavePlot$.next(trace(value, '#4477aa')))

    this.slaveLayout = makeLayout('CLINICAL MODEL')

  }
}


function trace(data: PreclinicalPlotData, colour: string): Data[]{

  const line = {
    x: data.dose,
    y: data.response,
    mode: 'lines',
    line: {width: 4, color:colour}
  } as Data
  return [line]
}


export function makeMasterLayout() {
  const margin = 10
  return {
    width: 600,
    height: 250,
    xaxis: {

      automargin: true,
      type: 'log'
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


export function makeLayout(title: string) {
  const margin = 10
  return {
    width: 600,
    height: 250,
    xaxis: {
      title: '<b>Dose </b>',
      automargin: true,
      type: 'log'
    },
    yaxis: {
      title: '<b>Response </b>',
      automargin: true
    },
    autosize: false,
    showlegend: false,
 title: title,
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
