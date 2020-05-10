import {Component, Input, OnInit} from '@angular/core';
import {ThetaElementInput} from '../../../models/ui.models';
import {FormControl, FormGroup} from '../../../utils/forms.utils';

@Component({
  selector: 'fx-element-input',
  templateUrl: './element-input.component.html',
  styleUrls: ['./element-input.component.scss'],

})
export class ElementInputComponent  implements OnInit{

  @Input() form: FormGroup<ThetaElementInput>

get options(){
    return this.form.value
}

get sliderValueControl(): FormControl<number>{
    return this.form.get('value') as FormControl<number>
}


  ngOnInit(): void {

    window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);

  }


}
