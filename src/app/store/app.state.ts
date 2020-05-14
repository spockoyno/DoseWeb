import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {AppModel, DosingModel, PreclinicalModel, PreclinicalBiHillPlotData} from './app.model';
import {initialAppState} from './defaults.state';
import {BiHillTheta} from '../models/biphasic-hill.model';
import {ChangedPreclinicalTheta} from './actions';
import {gridInclusive, biHillModelCorrected, biHillModel, biHillUpModel, biHillDownModel} from '../models/model-functions';

const appModel_TOKEN = new StateToken<AppModel>('appModel')

type AppStateContext = StateContext<AppModel>
@State<AppModel>({
  name: appModel_TOKEN,
  defaults: initialAppState(),
})
@Injectable()
export class AppState {

   @Selector()
  static twoLogsTheta(data: AppModel): BiHillTheta {
    return data.preclinical.twoLogisticsModel
  }


   @Selector()
  static dosingModel(data: AppModel): DosingModel {
    return data.dosing
  }


   @Selector()
  static preclinicalModel(data: AppModel): PreclinicalModel {
    return data.preclinical
  }



  @Selector()
  static   preclinicalPlot(data: AppModel): PreclinicalBiHillPlotData   {
   const doses = gridInclusive(data.preclinical.doseInterval)
    const theta = data.preclinical.twoLogisticsModel
   const  response = doses.map(value => biHillModel(theta, value))
    const  responseUp = doses.map(value => biHillUpModel(theta, value))
    const  responseDown = doses.map(value => biHillDownModel(theta, value))


    return {dose: doses, response: response, downResponse: responseDown, upResponse: responseUp}

  }

  @Selector()
  static   clinicalPlot(data: AppModel): PreclinicalBiHillPlotData   {
   const doses = gridInclusive(data.preclinical.doseInterval)
    const theta =data.preclinical.twoLogisticsModel
    let response = doses.map(value => biHillModelCorrected(theta, value))

    // const ceder=twoLogToCeder(theta)
    // response = doses.map(value => cedergreenModel(ceder, value))
    return {dose: doses, response: response}

  }


  @Action(ChangedPreclinicalTheta)
  actChangedPreclinicalTheta(ctx: AppStateContext, action:  ChangedPreclinicalTheta): void
  {
    const changed: PreclinicalModel = {... ctx.getState().preclinical, twoLogisticsModel: action.value}
    ctx.patchState({preclinical: changed}) }

}
