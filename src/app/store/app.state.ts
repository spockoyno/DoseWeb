import {Injectable} from '@angular/core';
import {Selector, State, StateToken} from '@ngxs/store';
import {AppModel, PreclinicalModel} from './app.model';
import {initialAppState} from './defaults.state';


const appModel_TOKEN = new StateToken<AppModel>('appModel')

@State<AppModel>({
  name: appModel_TOKEN,
  defaults: initialAppState()
})
@Injectable()
export class AppState {

  @Selector()
  static  preclinical(data: AppModel):PreclinicalModel {
    return data.preclinical
  }

}
