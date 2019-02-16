import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService, UserService } from '../../../_services';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.scss'],
})
export class ResetpwdComponent implements OnInit {
  public forgetPasswordForm: FormGroup;
  public confirmCodeForm: FormGroup;
  public loading = false;
  public submitted = false;
  public submittedView = false;
  public submittedEmail = '';
  public resetPasswordForm = false;
  public confirmCodeError: string;
  public confirmCodeSuccess: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { }

  get resetPasswordFormState() { return this.forgetPasswordForm.controls; }
  get confirmCodeFormState() { return this.confirmCodeForm.controls; }

  public sendEmailAgain() {
    this.submittedView = false;
  }
  public onSubmit() {
    this.submitted = true;
    if (this.forgetPasswordForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService.forgotPassword(this.forgetPasswordForm.value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          if (data && data.status === 'success') {
            this.submittedView = true;
          }
          this.loading = false;
        },
        (error) => {
          this.loading = false;
        });
  }

  public sentCode() {
    const value = this.confirmCodeForm.value;
    this.submitted = true;
    if (this.confirmCodeForm.invalid) {
      return;
    }
    if (value.password !== value.confirmPassword) {
      this.confirmCodeError = 'password do not match';
      return;
    }
    this.userService.forgot_password_confirm(this.confirmCodeForm.value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          if (data && data.status === 'success') {
            this.submittedView = true;
            this.confirmCodeSuccess = 'You successfully changed password';
          }
          this.loading = false;
        },
        (error) => {
          this.confirmCodeError = error.error.message;
          this.loading = false;
        });
  }

  public ngOnInit() {
    const url = new URL(location.href);
    const emailParam = url.searchParams.get('param');
    if (emailParam) {
      this.resetPasswordForm = true;
      this.confirmCodeForm = this.formBuilder.group({
        confirmCode: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      });
    }
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
