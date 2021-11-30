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
  public options: any;
  
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<string>(this.restAPI + this.kpi ).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
    this.options = {
      title: {
        text: 'Reistijd'
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
        data: ['Gemiddelde reistijd', 'Huidig moment', 'Prognose 15 min']
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
          data: [18, 23, 19]
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
          data: [21, 24, 20]
        }
      ]
    };
  }

}
