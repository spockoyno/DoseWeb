import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Store} from '@ngxs/store';
import {EtaState} from '../../store/state/eta.state';
import {Dispatch} from '@ngxs-labs/dispatch-decorator';
import {MatSliderChange} from '@angular/material/slider';
import {PutDummyOne} from '../../store/actions';
import {DummyOneModel} from '../../store/state/dummy.state.model';

@Component({
  selector: 'fx-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  _slider: BehaviorSubject<DummyOneModel>
  currentSliderValue: number

  constructor(private store: Store) {
    this._slider = new BehaviorSubject<DummyOneModel>(this.store.selectSnapshot(EtaState.dummyOne))

    this.currentSliderValue = this.slider.value
  }

  get slider(): DummyOneModel{
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
    return new PutDummyOne(update)
  }
}
