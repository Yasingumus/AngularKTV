import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionDifferenceComponent } from './emission-difference.component';

describe('EmissionDifferenceComponent', () => {
  let component: EmissionDifferenceComponent;
  let fixture: ComponentFixture<EmissionDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissionDifferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissionDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
