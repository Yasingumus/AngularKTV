import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// importeer in dit bestand alle modules die je gaat gebruiken
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
import { EmissionDifferenceComponent } from './components/dashboard/emission-difference/emission-difference.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleKpiComponent,
    DashboardComponent,
    EmissionKpiComponent,
    PercentagesComponent,
    SliderOverviewComponent,
    EmissionDifferenceComponent,
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
