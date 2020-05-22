import {Action, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {initialEtaStateModel} from './defaults.state';
import {Injectable} from '@angular/core';
import {EtaStateModel} from './eta.state.model';
import {PutBiHillParameter, PutDummy} from '../actions';
import {BiphasicHillTheta} from '../../models/common';
import {PageTwoStateModel} from './page-two.state.model';

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

@Selector()
static dummy(data: EtaStateModel): PageTwoStateModel{
    return data.dummy
}

  @Action(PutBiHillParameter)
  actPutBiHillParameter(ctx: ContextEta, action:  PutBiHillParameter): void
  {
    console.log('Inside PutBiHill action handler')
    console.log(action)
    const updatedTheta: BiphasicHillTheta = {...ctx.getState().biHillModel, [action.value.name]: action.value}

    ctx.patchState({biHillModel: updatedTheta}) }

  @Action(PutDummy)
  actPutDummy(ctx: ContextEta, action:  PutDummy): void
  {
    console.log('Inside Dummy action handler')
    console.log(action)
    ctx.patchState({dummy:action.value}) }
}
