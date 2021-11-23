import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KpiDataComponent } from './components/dashboard/kpi-data/kpi-data.component';
import { SingleKpiComponent } from './components/dashboard/single-kpi/single-kpi.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleKpiComponent,
    KpiDataComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
