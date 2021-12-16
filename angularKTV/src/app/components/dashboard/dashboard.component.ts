import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmissionData, EmissionJson } from './emission-kpi/emission-data';
import { PercentagesData, PercentagesJson } from './percentages/percentages-json';
import { TraveltimeData, TraveltimeJson } from './single-kpi/traveltime-json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private restAPI = 'http://localhost:2000/api/kpis';

  public emisionOptionsTotal: any;
  public emisionOptionsEstimated: any;
  public time = 7;
  public emissionJson: EmissionJson[] = [];
  public emissionData?: EmissionData;
  public traveltimeOptions: any;

  public traveltimeJson: TraveltimeJson[] = [];
  public traveltimeData?: TraveltimeData[] = [];

  public percentagesJson: PercentagesJson[] = [];
  public percentagesData?: PercentagesData[] = [];

  constructor(private http: HttpClient) { }

  changeTime(time: number) {
    this.emissionData = this.emissionJson.find(j => j.time === time)?.data;
    this.traveltimeData = this.traveltimeJson.find(j => j.time === time)?.data;
    this.percentagesData = this.percentagesJson.find(j => j.time === time)?.data;
    this.constructEmissionOptions();
    this.constructTraveltimeOptions();

  }

  ngOnInit(): void {
    this.constructEmisionData();
    this.constructTraveltimeData();
    this.constructPercentagesData();
  }

  private constructTraveltimeData() {
    this.http.get<TraveltimeJson[]>(`${this.restAPI}/traveltimes`).subscribe(json => {
      this.traveltimeJson = json;
      this.traveltimeData = this.traveltimeJson.find(j => j.time === this.time)?.data;
      this.constructTraveltimeOptions();
    });
  }
  private constructPercentagesData() {
    this.http.get<PercentagesJson[]>(`${this.restAPI}/percentages`).subscribe(json => {
      this.percentagesJson = json;
      this.percentagesData = this.percentagesJson.find(j => j.time === this.time)?.data;
      console.log(this.percentagesData);
    });
  }


  private constructEmisionData() {
    // Emissiondata REST call
    this.http.get<EmissionJson[]>(`${this.restAPI}/emission`).subscribe(json => {
      this.emissionJson = json;
      this.emissionData = this.emissionJson.find(j => j.time === this.time)?.data
      this.constructEmissionOptions();
    });

    // Traveltimedata REST call


  }

  private constructTraveltimeOptions() {
    this.traveltimeOptions = {
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
        data: this.traveltimeData?.map(t => t.name)
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
          data: this.traveltimeData?.map(t => t.traveltime)
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
          data: this.traveltimeData?.map(t => t.estimation)
        }
      ]
    };
  }


  

  private constructPercentageOptions() {
  
}

  private constructEmissionOptions() {
  this.emisionOptionsTotal = {
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
          color: 'auto',
          fontSize: 20
        },
        data: [{ value: this.emissionData?.total }]
      }
    ]
  };

  this.emisionOptionsEstimated = {
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
          color: 'auto',
          fontSize: 20
        },
        data: [{ value: this.emissionData?.estimated }]
      }
    ]
  };

}
}
