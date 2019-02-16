import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService, UserService } from '../../../_services';
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from '../../../store/app.states';
import { LogIn } from '../../../store/actions/auth.actions';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public loginError: boolean;

  getState: Observable<any>;
  errorMessage: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.getState.subscribe((state) => {
      console.log(43, state);
      if (state.errorMessage) {
        this.loginError = state.errorMessage;
      }
      if (state.user) {
        console.log(48, 'success user');
        this.loginError = false;
      }
      this.loading = false;
    });
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/profile';
  }
  // more logical name to f
  get loginFormState() { return this.loginForm.controls; }

  public onSubmit() {
    this.loading = true;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return 'invalid form';
    }
    const payload = {
      email: this.loginFormState.email.value,
      password: this.loginFormState.password.value
    };
    this.store.dispatch(new LogIn(payload));
  }
}
