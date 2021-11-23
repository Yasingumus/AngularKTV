import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleKpiComponent } from './single-kpi.component';

describe('SingleKpiComponent', () => {
  let component: SingleKpiComponent;
  let fixture: ComponentFixture<SingleKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleKpiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
