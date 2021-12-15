import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { TraveltimeJson } from './traveltime-json';

@Component({
  selector: 'app-single-kpi',
  templateUrl: './single-kpi.component.html',
  styleUrls: ['./single-kpi.component.css']
})

export class SingleKpiComponent implements OnInit {

  @Input() name= 'string' ;
  @Input() kpi='';
  private restAPI = 'http://localhost:2000/api/kpis/';
  public data:TraveltimeJson[] = [];
  public traveltimes: number[]=[];
  public delays: number[]=[];
  public categories: string[]=[];
  public options: any;
  
  
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<TraveltimeJson[]>(this.restAPI + this.kpi ).subscribe(data => {
      data.forEach(element => {
        this.traveltimes.push(element.traveltime);
        this.delays.push(element.delay);
        this.categories.push(element.name);
      });
      this.data = data;
      //console.log(this.traveltimes);
    });
    this.options = {
      title: {
        text: ''
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0, 1]
      },
      yAxis: {
        type: 'category',
        data: this.categories
      },
      series: [
        {
          name: 'Normale reistijd',
          type: 'bar',
          label: {
            show: true,
            position: 'right'
          },
          emphasis: {
            focus: 'series'
          },
          data: this.traveltimes     
        },
        {
          name: 'Vertraging',
          type: 'bar',
          label: {
            show: true,
            position: 'right'
          },
          emphasis: {
            focus: 'series'
          },
          data: this.delays
        }
      ]
    };
  }
}


