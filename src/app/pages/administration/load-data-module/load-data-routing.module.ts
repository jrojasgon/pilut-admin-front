import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoadDataComponent} from './load-data/load-data.component';

const ROUTES: Routes = [
  {
    path: 'loadData',
    component: LoadDataComponent,
    data: {
      title: 'Load Data'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class LoadDataRoutingModule {
}
