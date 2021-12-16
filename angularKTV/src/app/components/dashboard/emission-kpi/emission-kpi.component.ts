import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emission-kpi',
  templateUrl: './emission-kpi.component.html',
  styleUrls: ['./emission-kpi.component.css']
})
export class EmissionKpiComponent {

  @Input() name = '';
  @Input() optionsTotal: any;
  @Input() optionsEstimated: any;

  constructor() { }

}
