import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontResizerComponent } from './font-resizer.component';

describe('FontResizerComponent', () => {
  let component: FontResizerComponent;
  let fixture: ComponentFixture<FontResizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontResizerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FontResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
