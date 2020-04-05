import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompetitionChartComponent} from './competition-chart/competition-chart.component';

const COMPETITION_ROUTES: Routes = [
  {
    path: 'indicators',
    component: CompetitionChartComponent,
    data: {
      title: 'Competition Creation'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(COMPETITION_ROUTES)],
  exports: [RouterModule],
})
export class CompetitionChartRoutingModule {
}
