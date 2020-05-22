import {Component, OnInit} from '@angular/core';
import {PageStep} from '../top.module';


@Component({
  selector: 'fx-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent  implements OnInit{
  steps: PageStep[]=  [
    {
      title: 'One',
      route: ['/one'],
      enabled: false
    }, {
      title: 'Two',
      route: ['/two'],
      enabled: false
    },



  ]

  constructor() { }

  ngOnInit(): void {
  }

}
