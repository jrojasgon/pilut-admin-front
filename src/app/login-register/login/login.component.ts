import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../shared/services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthService,
    private toast: ToastrService,
    private formBuilder: FormBuilder) {
    this.createLoginForm();
  }


  ngOnInit(): void {
    if (this.authenticationService.isAuthenticated()) {
      this.router.navigate(['competition', 'creation']);
    }
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
        .subscribe(
          user => {
            this.loading = false;
            if (user != null) {
              localStorage.setItem('user', JSON.stringify(user));
              this.router.navigate(['competition', 'creation']);
              // this.router.navigate(['competitionCreation']);
            } else {
              this.toast.warning('Usuario no registrado', '');
              this.router.navigate(['userRegister']);
            }
          },
          error => {
            this.toast.error(error.message, 'Error');
            this.loading = false;
          });
    }
  }

  // On Forgot password link click
  onForgotPassword() {
    this.router.navigate(['forgotpassword'], {relativeTo: this.route.parent});
  }

}
