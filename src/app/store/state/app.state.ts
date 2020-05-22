import { Injectable } from '@angular/core'
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store'
import {
  AppModel,
  ClinicalModel,
  BiHillPlotData,
  PreclinicalModel,
} from './app.model'
import { initialAppState } from './defaults.state'
import { BiHillThetaSpec } from '../../models/biphasic-hill.model'
import {
  ChangedClinicalModel,
  ChangedKappaInput,
  ChangedPreclinicalTheta,
} from '../actions'
import { biHillModelValues, gridInclusive } from '../../models/model-functions'
import { FactorInterval } from '../../models/common'

const appModel_TOKEN = new StateToken<AppModel>('appModel')

type ContextApp = StateContext<AppModel>
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
  static preclinicalPlot(data: AppModel): BiHillPlotData {
    const doses = gridInclusive(data.preclinical.doseInterval)

    const theta: BiHillThetaSpec = data.preclinical.biHillModel
    console.log('preclinicalPlot')
    console.log(data)
    console.log(theta)
    // console.log(doses)
    const response = doses.map((value) => biHillModelValues(theta, value))

    return { dose: doses, response: response }
  }

  @Selector()
  static clinicalPlot(data: AppModel): BiHillPlotData {
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

  @Action(ChangedPreclinicalTheta)
  actChangedPreclinicalTheta(
    ctx: ContextApp,
    action: ChangedPreclinicalTheta
  ): void {
    console.log('actPreclinical')
    console.log(action)

    const changed: PreclinicalModel = {
      ...ctx.getState().preclinical,
      biHillModel: action.value,
    }

    ctx.patchState({ preclinical: changed })
  }

  @Action(ChangedKappaInput)
  actChangedKappaInput(ctx: ContextApp, action: ChangedKappaInput): void {
    console.log('act kAPPA')
    console.log(action)
    const clinical: ClinicalModel = {
      ...ctx.getState().clinical,
      kappaModel: action.value,
    }
    console.log(`clinical Kappa`)
    console.log(clinical)
    ctx.patchState({ clinical: clinical })
    console.log(ctx.getState())
    console.log('done kappa')
  }

  @Action(ChangedClinicalModel)
  actChangedClinicalModel(ctx: ContextApp, action: ChangedClinicalModel): void {
    console.log('actChangedClinicalModel')
    console.log(action)
    console.log(ctx.getState())
    const state: AppModel = { ...ctx.getState(), clinical: action.value }

    ctx.setState(state)
    console.log(ctx.getState())
    // ctx.patchState({ clinical: action.value })
  }
}
