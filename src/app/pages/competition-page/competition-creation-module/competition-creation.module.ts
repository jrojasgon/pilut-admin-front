import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {CompetitionCreationRoutingModule} from './competition-creation-routing.module';
import {CompetitionCreationComponent} from './competition-creation/competition-creation.component';
import {UiSwitchModule} from 'ngx-ui-switch';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CompetitionCreationRoutingModule,
    UiSwitchModule
  ],
  declarations: [
    CompetitionCreationComponent,
  ]
})
export class CompetitionCreationModule {
}
