import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SingleKpiComponent } from './components/dashboard/single-kpi/single-kpi.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EmissionKpiComponent } from './components/dashboard/emission-kpi/emission-kpi.component';
import { PercentagesComponent } from './components/dashboard/percentages/percentages.component';
import { SliderOverviewComponent } from './components/dashboard/slider-overview/slider-overview.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    SingleKpiComponent,
    DashboardComponent,
    EmissionKpiComponent,
    PercentagesComponent,
    SliderOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    NoopAnimationsModule,
    BrowserAnimationsModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
