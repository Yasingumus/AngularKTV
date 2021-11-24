import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-kpi',
  templateUrl: './single-kpi.component.html',
  styleUrls: ['./single-kpi.component.css']
})
export class SingleKpiComponent implements OnInit {

  @Input() name='';
  @Input() kpi='';
  private restAPI = 'http://localhost:2000/api/kpis/';
  public data = '';

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<string>(this.restAPI + this.kpi ).subscribe(data => {
      this.data = data;
    });
  }

}
