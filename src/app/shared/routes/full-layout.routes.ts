import {Routes} from '@angular/router';

export const FULL_ROUTES: Routes = [
  {
    path: 'creation',
    loadChildren: () => import('../../pages/competition-page/competition-creation-module/competition-creation.module')
      .then(m => m.CompetitionCreationModule)
  },
  {
    path: 'list',
    loadChildren: () => import('../../pages/competition-page/competition-list-module/competition-list.module')
      .then(m => m.CompetitionListModule)
  },
];
