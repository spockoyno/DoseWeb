import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {BehaviorSubject} from 'rxjs';
import {ThetaSpec} from '../../models/common';
import {EtaState} from '../../store/state/eta.state';
import {MatSliderChange} from '@angular/material/slider';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {PutDummy} from '../../store/actions';

@Component({
  selector: 'fx-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  _slider: BehaviorSubject<ThetaSpec>
  currentSliderValue: number

  constructor(private store: Store) {
    this._slider = new BehaviorSubject<ThetaSpec>(this.store.selectSnapshot(EtaState.dummy).spec)

    this.currentSliderValue = this.slider.val
  }

  get slider(): ThetaSpec{
    return this._slider.value
  }

  ngOnInit(): void {
  }

  @Dispatch()
  sliderChanged($event: MatSliderChange) {
    const value = $event.value
    if(value===null){
      return
    }
    const update = {... this.slider, val: value}
    return new PutDummy({spec:update})
  }
}
