import { Component } from '@angular/core';
import { CurrentDateComponent } from '../current-date/current-date.component';
//import { CurrentTimeComponent } from '../current-time/current-time.component';
import { ColourSwitcherComponent } from '../colour-switcher/colour-switcher.component';
import { FontResizerComponent } from '../font-resizer/font-resizer.component';

@Component({
  selector: 'ds-topbar',
  standalone: true,
  imports: [
    CurrentDateComponent, 
    ColourSwitcherComponent, 
    FontResizerComponent, 
    //CurrentTimeComponent
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

}
