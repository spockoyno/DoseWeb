import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreclinicalComponent } from './preclinical.component';



@NgModule({
  declarations: [PreclinicalComponent],
  exports: [
    PreclinicalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PreclinicalModule { }
