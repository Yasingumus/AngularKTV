import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiDataComponent } from './kpi-data.component';

describe('KpiDataComponent', () => {
  let component: KpiDataComponent;
  let fixture: ComponentFixture<KpiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
