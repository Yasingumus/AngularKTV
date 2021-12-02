import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KpiDataComponent } from './components/dashboard/kpi-data/kpi-data.component';
import { SingleKpiComponent } from './components/dashboard/single-kpi/single-kpi.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EmissionKpiComponent } from './components/dashboard/emission-kpi/emission-kpi.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleKpiComponent,
    KpiDataComponent,
    DashboardComponent,
    EmissionKpiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
