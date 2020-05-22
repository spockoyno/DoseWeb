import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {EtaState} from '../../../store/state/eta.state';
import {BiphasicHillParameter, BiphasicHillTheta} from '../../../models/common';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {PutBiHillParameter} from '../../../store/actions';

@Injectable()
export class BiphasicHillEtaService {


  constructor(private store: Store) { }

get  biHillTheta(): BiphasicHillTheta{
    return this.store.selectSnapshot(EtaState.biphasicHillTheta)
}

@Dispatch()
  updatedParameter(data: BiphasicHillParameter) {
  return   new PutBiHillParameter(data)
  }
}
