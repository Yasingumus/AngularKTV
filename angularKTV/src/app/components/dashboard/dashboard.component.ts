import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public kpiConfig = [
    { name: 'Reistijden', kpi: 'traveltimes' },
    { name: 'Emissie', kpi: 'emission' }
  ];
    
  constructor() { }

  ngOnInit(): void {
  }

}
