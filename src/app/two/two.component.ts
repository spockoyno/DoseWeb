import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {BehaviorSubject} from 'rxjs';
import {DummyState} from '../store/dummy.state';
import {MatSliderChange} from '@angular/material/slider';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {PutDummyTwo} from '../store/actions';
import {ThetaSpec} from '../store/dummy.state.model';

@Component({
  selector: 'fx-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  _slider: BehaviorSubject<ThetaSpec>
  currentSliderValue: number

  constructor(private store: Store) {
    this._slider = new BehaviorSubject<ThetaSpec>(this.store.selectSnapshot(DummyState.dummyTwo).spec)

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
    return new PutDummyTwo({spec:update})
  }
}
