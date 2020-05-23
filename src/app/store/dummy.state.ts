import {Action, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {PutDummyOne, PutDummyTwo} from './actions';
import {DummyOneModel, DummyTwoModel, DummyStateModel} from './dummy.state.model';

const TOKEN = new StateToken<DummyStateModel>('etaStateModel')

const INIT: DummyStateModel = {

  dummyOne: {interval: { min: 0, step: 0.1,  max: 1000 }, value: 100},
  dummyTwo: {spec: { min: 0, step: 0.1, val: 6.2, max: 10 }}
}

 type ContextEta = StateContext<DummyStateModel>
@State<DummyStateModel>({
  name: TOKEN,
  defaults: INIT,
})
@Injectable()
export class DummyState {

@Selector()
static dummyTwo(data: DummyStateModel): DummyTwoModel{
    return data.dummyTwo
}
@Selector()
static dummyOne(data: DummyStateModel): DummyOneModel{
    return data.dummyOne
}


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
    ctx.patchState({dummyTwo:action.spec}) }


}
