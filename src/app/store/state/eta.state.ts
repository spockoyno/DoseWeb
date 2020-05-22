import {Action, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {initialEtaStateModel} from './defaults.state';
import {Injectable} from '@angular/core';
import {EtaStateModel} from './eta.state.model';
import {PutBiHillParameter} from '../actions';
import {BiphasicHillTheta} from '../../models/common';

const TOKEN = new StateToken<EtaStateModel>('etaStateModel')



 type ContextEta = StateContext<EtaStateModel>
@State<EtaStateModel>({
  name: TOKEN,
  defaults: initialEtaStateModel(),
})
@Injectable()
export class EtaState {

  @Selector()
 static biphasicHillTheta(data: EtaStateModel): BiphasicHillTheta{
    return data.biHillModel
  }




  @Action(PutBiHillParameter)
  actPutBiHillParameter(ctx: ContextEta, action:  PutBiHillParameter): void
  {
    console.log('In New PutBiHill parameter')
    console.log(action)
    const updatedTheta: BiphasicHillTheta = {...ctx.getState().biHillModel, [action.value.name]: action.value}

    ctx.patchState({biHillModel: updatedTheta}) }
}
