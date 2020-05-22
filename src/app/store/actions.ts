import {DummyOneModel, DummyTwoModel} from './dummy.state.model';


export class PutDummyOne{

  static readonly type: '[Etas] dummy one'
  constructor(public value: DummyOneModel) {
  }
}


export class PutDummyTwo{

  static readonly type: '[Etas] dummy two'
  constructor(public spec: DummyTwoModel) {
  }
}

