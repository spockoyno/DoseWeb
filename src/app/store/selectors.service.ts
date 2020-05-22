import { Injectable } from '@angular/core';
import {AppModel, BiHillPlotData, PreclinicalModel} from './state/app.model';
import {biHillModelValues, gridInclusive} from '../models/model-functions';
import {BiHillThetaSpec} from '../models/biphasic-hill.model';

@Injectable({
  providedIn: 'root'
})
export class SelectorsService {


  preclinicalPlot(data: PreclinicalModel ): BiHillPlotData {
    const doses = gridInclusive(data.doseInterval)

    const theta: BiHillThetaSpec = data.biHillModel
    console.log('preclinicalPlot')
    console.log(data)
    console.log(theta)
    // console.log(doses)
    const response = doses.map((value) => biHillModelValues(theta, value))

    return { dose: doses, response: response }
  }

  clinicalPlot(data: AppModel): BiHillPlotData {
    console.log('clinicalPlot')
    console.log(data)
    const doses = gridInclusive(data.preclinical.doseInterval)
    const theta = data.preclinical.biHillModel

    // const kappaAssumed = data.clinical.kappaModel.kappaAssumed

    console.log(data)

    const kappaAssumed = 10
    console.log(data.preclinical)
    let response = doses.map((value) =>
      biHillModelValues(theta, value / kappaAssumed)
    )

    return { dose: doses, response: response }
  }



}
