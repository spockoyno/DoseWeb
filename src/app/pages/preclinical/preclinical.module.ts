import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreclinicalComponent } from './preclinical.component';
import {UserInputService} from './services/user-input.service';
import { ParameterInputComponent } from './parameter-input/parameter-input.component';



@NgModule({
  declarations: [PreclinicalComponent, ParameterInputComponent],
   providers: [UserInputService],
  exports: [
    PreclinicalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PreclinicalModule { }
