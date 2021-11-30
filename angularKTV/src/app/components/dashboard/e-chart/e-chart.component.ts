import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-e-chart',
  templateUrl: './e-chart.component.html',
  styleUrls: ['./e-chart.component.css']
})
export class EChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      let option = {
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
      }
  }

}
