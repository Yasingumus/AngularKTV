import { Component, Input, OnInit } from '@angular/core';
import { percentagesJson } from './percentages-json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-percentages',
  templateUrl: './percentages.component.html',
  styleUrls: ['./percentages.component.css']
})
export class PercentagesComponent implements OnInit {

  @Input() name = 'string';
  @Input() kpi = '';
  private restAPI = 'http://localhost:2000/api/kpis/';
  public data: percentagesJson[] = [];
  public options: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<percentagesJson[]>(this.restAPI + this.kpi).subscribe(data => {
      this.data = data;
    });
  }
}
