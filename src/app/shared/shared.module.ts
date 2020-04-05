import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {LoadingComponent} from './components/loading/loading.component';

// COMPONENTS
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorPageComponent} from '../pages/error/error-page.component';

// DIRECTIVES
import {ToggleFullscreenDirective} from './directives/toggle-fullscreen.directive';
import {SidebarDirective} from './directives/sidebar.directive';
import {SidebarLinkDirective} from './directives/sidebarlink.directive';
import {SidebarListDirective} from './directives/sidebarlist.directive';
import {SidebarAnchorToggleDirective} from './directives/sidebaranchortoggle.directive';
import {SidebarToggleDirective} from './directives/sidebartoggle.directive';

@NgModule({
  exports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    ErrorPageComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    NgbModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SearchFormComponent,
    LoadingComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    TranslateModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ErrorPageComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    SidebarLinkDirective,
    SidebarListDirective,
    SidebarAnchorToggleDirective,
    SidebarToggleDirective,
    SearchFormComponent,
    LoadingComponent
  ]
})
export class SharedModule {
}
