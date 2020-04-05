import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {ToastrModule} from 'ngx-toastr';
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {StoreModule} from '@ngrx/store';
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import {AppComponent} from './app.component';
import {FullLayoutComponent} from './layouts/full/full-layout.component';
import {DragulaService} from 'ng2-dragula';
import {AuthService} from './shared/services/authentication/auth.service';
import {AuthGuardService} from './shared/services/authentication/auth-guard.service';
import {LoginRegisterModule} from './login-register/login-register.module';
import {RequestInterceptorService} from './shared/services/http/request.interceptor.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, FullLayoutComponent],
  imports: [
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR KEY'
    }),
    PerfectScrollbarModule,
    LoginRegisterModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    DragulaService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
