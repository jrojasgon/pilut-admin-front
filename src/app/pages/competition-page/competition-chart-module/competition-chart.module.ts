import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsModule} from 'ng2-charts';
import {ChartistModule} from 'ng-chartist';
// import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CompetitionChartRoutingModule} from './competition-chart-routing.module';
import {CompetitionChartComponent} from './competition-chart/competition-chart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CompetitionChartRoutingModule,
    ChartsModule,
    ChartistModule,
    // NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    CompetitionChartComponent
  ],
})
export class CompetitionChartModule {

}
