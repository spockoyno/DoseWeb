import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {AppModel, PreclinicalModel, PreclinicalPlotData} from './app.model';
import {initialAppState} from './defaults.state';
import {TwoLogsTheta} from '../models/theta.models';
import {ChangedPreclinicalTheta} from './actions';
import {gridInclusive, twoLogModelMult, twoLogModelZero} from '../models/model-functions';

const appModel_TOKEN = new StateToken<AppModel>('appModel')

type AppStateContext = StateContext<AppModel>
@State<AppModel>({
  name: appModel_TOKEN,
  defaults: initialAppState(),
})
@Injectable()
export class AppState {

   @Selector()
  static twoLogsTheta(data: AppModel): TwoLogsTheta {
    return data.preclinical.twoLogisticsModel
  }


  @Selector()
  static   preclinicalPlot(data: AppModel): PreclinicalPlotData   {
   const doses = gridInclusive(data.preclinical.doseInterval)
    const theta = data.preclinical.twoLogisticsModel
    let response = doses.map(value => twoLogModelZero(theta, value))

    // const ceder=twoLogToCeder(theta)
    // response = doses.map(value => cedergreenModel(ceder, value))
    return {dose: doses, response: response}

  }

  @Selector()
  static   clinicalPlot(data: AppModel): PreclinicalPlotData   {
   const doses = gridInclusive(data.preclinical.doseInterval)
    const theta =data.preclinical.twoLogisticsModel
    let response = doses.map(value => twoLogModelMult(theta, value))

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
