import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourSwitcherComponent } from './colour-switcher.component';

describe('ColourSwitcherComponent', () => {
  let component: ColourSwitcherComponent;
  let fixture: ComponentFixture<ColourSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColourSwitcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColourSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
