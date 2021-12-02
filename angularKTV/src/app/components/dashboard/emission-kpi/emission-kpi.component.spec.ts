import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionKpiComponent } from './emission-kpi.component';

describe('EmissionKpiComponent', () => {
  let component: EmissionKpiComponent;
  let fixture: ComponentFixture<EmissionKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissionKpiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmissionKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
