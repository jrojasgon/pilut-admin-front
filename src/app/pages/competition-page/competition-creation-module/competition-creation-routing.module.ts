import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompetitionCreationComponent} from './competition-creation/competition-creation.component';


export const COMPETITION_ROUTES: Routes = [
  {
    path: 'creation',
    component: CompetitionCreationComponent,
    data: {
      title: 'Competition Creation'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(COMPETITION_ROUTES)],
  exports: [RouterModule],
})
export class CompetitionCreationRoutingModule {
}
