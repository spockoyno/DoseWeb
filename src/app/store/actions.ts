import {DummyOneModel, DummyTwoModel} from './dummy.state.model';


export class PutDummyOne{

  static readonly type: '[Input] dummy one'
  constructor(public value: DummyOneModel) {
  }
}


export class PutDummyTwo{

  static readonly type: '[Input] dummy two'
  constructor(public spec: DummyTwoModel) {
  }
}

