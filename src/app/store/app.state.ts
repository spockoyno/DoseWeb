import { Injectable } from '@angular/core'
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store'
import {
  AppModel,
  ClinicalModel,
  PreclinicalBiHillPlotData,
  PreclinicalModel,
} from './app.model'
import { initialAppState } from './defaults.state'
import { BiHillThetaSpec } from '../models/biphasic-hill.model'
import {
  ChangedClinicalModel,
  ChangedKappaInput,
  ChangedPreclinicalTheta,
} from './actions'
import { biHillModel, gridInclusive } from '../models/model-functions'
import { FactorInterval } from '../models/common'

const appModel_TOKEN = new StateToken<AppModel>('appModel')

type AppStateContext = StateContext<AppModel>
@State<AppModel>({
  name: appModel_TOKEN,
  defaults: initialAppState(),
})
@Injectable()
export class AppState {
  @Selector()
  static twoLogsTheta(data: AppModel): BiHillThetaSpec {
    return data.preclinical.biHillModel
  }

  @Selector()
  static clinicalModel(data: AppModel): ClinicalModel {
    return data.clinical
  }

  @Selector()
  static preclinicalModel(data: AppModel): PreclinicalModel {
    return data.preclinical
  }

  @Selector()
  static dosingInterval(data: AppModel): FactorInterval {
    return data.preclinical.doseInterval
  }

  @Selector()
  static preclinicalPlot(data: AppModel): PreclinicalBiHillPlotData {
    const doses = gridInclusive(data.preclinical.doseInterval)

    const theta: BiHillThetaSpec = data.preclinical.biHillModel
    console.log('hello')
    console.log(data)
    console.log(theta.e0)
    console.log(theta)
    // console.log(doses)
    const response = doses.map((value) => biHillModel(theta, value))

    return { dose: doses, response: response }
  }

  @Selector()
  static clinicalPlot(data: AppModel): PreclinicalBiHillPlotData {
    const doses = gridInclusive(data.preclinical.doseInterval)
    const theta = data.preclinical.biHillModel
    // const kappaAssumed = data.clinical.kappaModel.kappaAssumed
    console.log(theta)
    const kappaAssumed = 10
    console.log(data.preclinical)
    let response = doses.map((value) =>
      biHillModel(theta, value / kappaAssumed)
    )

    console.log(kappaAssumed)
    return { dose: doses, response: response }
  }

  @Action(ChangedPreclinicalTheta)
  actChangedPreclinicalTheta(
    ctx: AppStateContext,
    action: ChangedPreclinicalTheta
  ): void {
    const changed: PreclinicalModel = {
      ...ctx.getState().preclinical,
      biHillModel: action.value,
    }

    ctx.patchState({ preclinical: changed })
  }

  @Action(ChangedKappaInput)
  actChangedKappaInput(ctx: AppStateContext, action: ChangedKappaInput): void {
    const clinical: ClinicalModel = {
      ...ctx.getState().clinical,
      kappaModel: action.value,
    }

    ctx.patchState({ clinical: clinical })
  }

  @Action(ChangedClinicalModel)
  actChangedClinicalModel(
    ctx: AppStateContext,
    action: ChangedClinicalModel
  ): void {
    console.log(action)
    console.log(ctx.getState())
 const state: AppModel={... ctx.getState(), clinical: action.value}

    ctx.setState(state)
    console.log(ctx.getState())
    // ctx.patchState({ clinical: action.value })
  }
}
