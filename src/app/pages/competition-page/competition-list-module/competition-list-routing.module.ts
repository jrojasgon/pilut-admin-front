import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompetionListComponent} from './competions-list/competion.list.component';


export const COMPETITION_LIST_ROUTES: Routes = [
  {
    path: 'list',
    component: CompetionListComponent,
    data: {
      title: 'Competition List'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(COMPETITION_LIST_ROUTES)],
  exports: [RouterModule],
})
export class CompetitionListRoutingModule {
}
