import {Injectable} from '@angular/core';
import {Selector, State, StateToken} from '@ngxs/store';
import {AppModel, PreclinicalModel} from './app.model';
import {initialAppState} from './defaults.state';
import {ModelParameterInputs, ThetaElementInput,} from '../models/ui.models';
import {TwoLogParameters} from '../models/theta.model';
import {TwoLogsTheta} from '../models/definitions.models';

const appModel_TOKEN = new StateToken<AppModel>('appModel')

@State<AppModel>({
  name: appModel_TOKEN,
  defaults: initialAppState(),
})
@Injectable()
export class AppState {
  @Selector()
  static preclinical(data: AppModel): ModelParameterInputs {
    return twoLogsParameterInputs(data.preclinical)
  }
   @Selector()
  static twoLogsTheta(data: AppModel): TwoLogsTheta {
    return data.preclinical.twoLogisticsModel
  }


}

// NB:  assume that TwoLogsModelParametr
function twoLogsParameterInputs(d: PreclinicalModel): ModelParameterInputs {
  const t = d.thetaTwoLogsInput

    // @ts-ignore
  const keys: TwoLogParameters[] = Object.keys(t.parameters)
  const params: ThetaElementInput[] = keys.map((key) => {
    return { parameter: key, value: t.parameters[key], floor: t.intervals[key].min,
    step: t.intervals[key].step,
    ceil: t.intervals[key].max}
  })
  return {
    modelType: 'TwoLogs',
    parameters: params,
  }
}


