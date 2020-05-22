import {Action, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {initialEtaStateModel} from './defaults.state';
import {Injectable} from '@angular/core';
import {EtaStateModel} from './eta.state.model';
import {PutBiHillParameter, PutDummyOne, PutDummyTwo} from '../actions';
import {BiphasicHillTheta} from '../../models/common';
import {DummyOneModel, DummyTwoModel} from './dummy.state.model';

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
static dummyTwo(data: EtaStateModel): DummyTwoModel{
    return data.dummyTwo
}
@Selector()
static dummyOne(data: EtaStateModel): DummyOneModel{
    return data.dummyOne
}

  @Action(PutBiHillParameter)
  actPutBiHillParameter(ctx: ContextEta, action:  PutBiHillParameter): void
  {
    console.log('Inside PutBiHill action handler')
    console.log(action)
    const updatedTheta: BiphasicHillTheta = {...ctx.getState().biHillModel, [action.value.name]: action.value}

    ctx.patchState({biHillModel: updatedTheta}) }

  @Action(PutDummyOne)
  actPutDummyOne(ctx: ContextEta, action:  PutDummyOne): void
  {
    console.log('Inside Dummy One action handler')
    console.log(action)
    ctx.patchState({dummyOne:action.value}) }

     @Action(PutDummyTwo)
  actPutDummyTwo(ctx: ContextEta, action:  PutDummyTwo): void
  {
    console.log('Inside Dummy Two action handler')
    console.log(action)
    ctx.patchState({dummyTwo:action.value}) }


}
