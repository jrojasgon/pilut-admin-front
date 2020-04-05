import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompetitionListRoutingModule} from './competition-list-routing.module';
import {CompetionListComponent} from './competions-list/competion.list.component';
import {DragulaModule} from 'ng2-dragula';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompetitionListDetailComponent} from './competition-list-detail/competition-list-detail.component';
import {SharedModule} from '../../../shared/shared.module';
import {CompetitionDetailComponent} from './competition-detail/competition-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CompetitionIndicatorsComponent} from './competition-indicators/competition-indicators.component';
// import {ChartsModule} from 'ng2-charts';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule.forRoot(),
    CompetitionListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
    NgxChartsModule
  ],
  declarations: [
    CompetionListComponent,
    CompetitionListDetailComponent,
    CompetitionDetailComponent,
    CompetitionIndicatorsComponent,
  ]
})
export class CompetitionListModule {
}
