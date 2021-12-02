import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmissionJson } from './emission-json';


@Component({
  selector: 'app-emission-kpi',
  templateUrl: './emission-kpi.component.html',
  styleUrls: ['./emission-kpi.component.css']
})
export class EmissionKpiComponent implements OnInit {

  @Input() name= 'string' ;
  @Input() kpi='';
  private restAPI = 'http://localhost:2000/api/kpis/';
  public data:EmissionJson[] = [];
  public emission: number[]=[];
  public categories: string[]=[];
  public options: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<EmissionJson[]>(this.restAPI + this.kpi ).subscribe(data => {
      data.forEach(element => {
        this.emission.push(element.emission);
        this.categories.push(element.name);
      });
      this.data = data;
      console.log(this.emission);
    });
    this.options = {
      series: [
      {
      type: 'gauge',
      axisLine: {
      lineStyle: {
      width: 29,
      color: [
      [0.5, '#58d68d'],
      [0.7, '#F39C12'],
      [1, '#fd666d']
      ]
      }
      },
      pointer: {
      itemStyle: {
      color: 'auto'
      }
      },
      axisTick: {
      distance: -30,
      length: 8,
      lineStyle: {
      color: '#fff',
      width: 2
      }
      },
      splitLine: {
      distance: -30,
      length: -40,
      lineStyle: {
      color: '#fff',
      width: 4
      }
      },
      axisLabel: {
      color: 'auto',
      distance: 40,
      fontSize: 20
      },
      detail: {
      valueAnimation: true,
      formatter: '{value} kg C02',
      color: 'auto'
      },
      data: [{value: 70.1}]
      }
      ]
      };
      // setInterval(function () {
      // myChart.setOption({
      // series: [
      // {
      // data: [
      // {
      // value: +(Math.random() * 100).toFixed(1)
      // }
      // ]
      // }
      // ]
      // });
      // }, 1500);
  }

}
