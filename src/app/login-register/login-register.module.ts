import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    UserRegisterComponent,
    LoginComponent
  ],
  exports: [
    UserRegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LoginRegisterModule {
}
