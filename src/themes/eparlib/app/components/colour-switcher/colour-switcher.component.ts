import { Component } from '@angular/core';


@Component({
  selector: 'ds-colour-switcher',
  standalone: true,
  imports: [],
  templateUrl: './colour-switcher.component.html',
  styleUrl: './colour-switcher.component.scss'
})
export class ColourSwitcherComponent {

  currentTheme: string = 'light';  // Default theme

  constructor() { }

  switchTheme(theme: string) {
    this.removeExistingTheme();  // Remove any existing theme
    let themefile = '';
    let font = localStorage.getItem('font');
    if(font != undefined)
    {
      themefile = `${theme}-${font}`;
    } else {
      themefile = `${theme}-medium`;
    }
    this.loadTheme(themefile);       // Load the new theme 
    this.currentTheme = theme;   // Update the current theme
    localStorage.setItem('theme', theme);
    // if(theme=='light-theme'){
    //   document.getElementById('btnLight').style.display="none";
    //   document.getElementById('btnDark').style.display="block";
    // }else{
    //   document.getElementById('btnLight').style.display="block";
    //   document.getElementById('btnDark').style.display="none";
    // }
    
  }

  loadTheme(theme: string) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = 'theme-style';
    link.rel = 'stylesheet';
    link.href = `assets/eparlib/${theme}.css`;  // Path to your CSS files
    head.appendChild(link);
  }

  removeExistingTheme() {
    const existingTheme = document.getElementById('theme-style');
    if (existingTheme) {
      existingTheme.remove();
    }
  }
}
