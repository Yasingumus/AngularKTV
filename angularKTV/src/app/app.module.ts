import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleKpiComponent } from './single-kpi/single-kpi.component';
import { KpiDataComponent } from './kpi-data/kpi-data.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleKpiComponent,
    KpiDataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
