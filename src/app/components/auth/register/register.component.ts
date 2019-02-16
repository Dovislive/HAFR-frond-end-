import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService, UserService } from '../../../_services';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public loading = false;
  public submitted = false;
  public registerError: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get registerFormState() { return this.registerForm.controls; }

  public onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.registerForm.value.first_name = 'q';
    this.registerForm.value.last_name = 'q';
    this.userService.create(this.registerForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['/login']);
        },
        (error) => {
          this.registerError = error.error.message;
          this.loading = false;
        });
  }
}
