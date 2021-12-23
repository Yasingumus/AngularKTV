import { Component, Input, OnInit } from '@angular/core';
// Importeer Component input en onInit uit angular core

// Component bestaat uit deze paths// 
@Component({ 
  selector: 'app-emission-kpi',
  templateUrl: './emission-kpi.component.html',
  styleUrls: ['./emission-kpi.component.css']
})
export class EmissionKpiComponent {
  // hier wordt het type data gedefineerd
  @Input() name = '';
  @Input() optionsTotal: any;
  @Input() optionsEstimated: any;

  constructor() { }

}
