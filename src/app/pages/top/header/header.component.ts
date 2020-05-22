import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'fx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {


  constructor(registry: MatIconRegistry, sanitizer: DomSanitizer) {
    registry.addSvgIcon(
      'decider',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vaccineDoseBW.svg'))
  }


}
