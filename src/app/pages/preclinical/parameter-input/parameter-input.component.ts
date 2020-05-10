import {Component} from '@angular/core';
import {UserInputService} from '../services/user-input.service';

@Component({
  selector: 'fx-parameter-input',
  templateUrl: './parameter-input.component.html',
  styleUrls: ['./parameter-input.component.scss']
})
export class ParameterInputComponent {

 constructor(public input: UserInputService) {


 }

}
