import {Injectable} from '@angular/core';
import {Selector, State, StateToken} from '@ngxs/store';
import {AppModel, PreclinicalModel} from './app.model';
import {initialAppState} from './defaults.state';
import {ModelParameterInputs, ParameterInput} from '../models/ui.models';


const appModel_TOKEN = new StateToken<AppModel>('appModel');

@State<AppModel>({
  name: appModel_TOKEN,
  defaults: initialAppState()
})
@Injectable()
export class AppState {

  @Selector()
  static  preclinical(data: AppModel): ModelParameterInputs  {
    return twoLogsParameterInputs(data.preclinical);
  }

}

function twoLogsParameterInputs(d: PreclinicalModel ): ModelParameterInputs {
  const t = d.thetaTwoLogsInput;
  const keys =  Object.keys(t.parameters);
  const params: ParameterInput[] = keys.map(key => {return {parameterKey: key,
  display: key, value: t.parameters[key],
  interval: t.intervals[key]

}; });
  return {

    modelType: 'TwoLogs',
    parameters: params
  }; }
