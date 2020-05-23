export interface FactorInterval {
  min: number
  max: number
  step: number
}

export interface ThetaSpec {
  min: number
  max: number
  step: number
  val: number
}

export interface DummyOneModel  {

interval: FactorInterval
  value: number
}


export interface DummyTwoModel  {
  spec: ThetaSpec
}

export interface DummyStateModel {
  dummyOne: DummyOneModel
  dummyTwo: DummyTwoModel


}
