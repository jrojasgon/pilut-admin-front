import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/authentication/auth.service';
import {User} from '../../shared/model/user';
import {Router} from '@angular/router';
import {SERVER_ERROR, USER_EXISTS, USER_REGISTERED} from '../../shared/constants/constants';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  constructor(private toast: ToastrService, private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.createRegisterForm();
  }

  sexes = [{name: 'Mujer', id: 'F'}, {name: 'Hombre', id: 'M'}];
  registerForm: FormGroup;

  ngOnInit(): void {
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      password: ['', [Validators.required]],
      confirmedPassword: ['', [Validators.required]]
    });
  }

  registerUser() {
    if (this.registerForm.valid) {
      const pass = this.registerForm.controls.password.value;
      const confirmPass = this.registerForm.controls.confirmedPassword.value;
      if (pass === confirmPass) {
        console.log(this.registerForm.controls.firstName.value);
        const user = new User(this.registerForm.controls.firstName.value, this.registerForm.controls.lastName.value,
          this.registerForm.controls.sex.value,
          this.registerForm.controls.email.value, pass);

        this.authService.register(user).subscribe(
          data => {
            this.toast.success('OK', 'Register was OK');
            this.router.navigate(['login']);
          },
          error => {
            if (error.status === 409) {
              this.toast.error(USER_EXISTS, '');
            } else {
              this.toast.error(SERVER_ERROR, '');
            }
          });
      } else {
        this.toast.error('Password do not match', 'Error');
      }
    } else {
      this.toast.error('Todos los campos son obligatorios', 'Error');
    }
  }

}
