import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsModule} from 'ng2-charts';
import {ChartistModule} from 'ng-chartist';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {LoadDataRoutingModule} from './load-data-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../shared/shared.module';
import {LoadDataComponent} from './load-data/load-data.component';

@NgModule({
  imports: [
    CommonModule,
    LoadDataRoutingModule,
    ChartsModule,
    ChartistModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    LoadDataComponent
  ],
})
export class LoadDataModule {

}
