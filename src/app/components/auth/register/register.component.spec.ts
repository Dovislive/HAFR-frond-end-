import { async, ComponentFixture, TestBed, inject, getTestBed } from '@angular/core/testing';
import { Injectable, Injector } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { AuthenticationService, UserService } from '../../../_services';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegisterComponent } from './register.component';
import { first } from 'rxjs/operators';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User } from '../../../models/user';
import { environment } from '../../../../environments/environment';


describe('RegisterComponent', () => {
  let injector: TestBed;
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let httpMock: HttpTestingController;
  let service: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [RegisterComponent, ],
      providers: [{
        provide: AuthenticationService,
        useClass: AuthenticationService
      },
      {
        provide: UserService,
        useClass: UserService
      }]
    })
      .compileComponents();
    injector = getTestBed();
    service = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('register user', () => {

    const testUser = new User;

    const inputDebug: DebugElement = fixture.debugElement;


    const helper = (fieldName, value) => {
      const emailInput = inputDebug.query(By.css(`input[name=${fieldName}]`));
      const inputEmailChanged: HTMLInputElement = emailInput.nativeElement;
      inputEmailChanged.value = value;
      inputEmailChanged.dispatchEvent(new Event('input'));
      return value;
    };
    testUser.email = helper('email', 'nikita@asd.com');
    testUser.confirmEmail = helper('confirmEmail', 'nikita@asd.com');
    testUser.password = helper('password', '123321123');
    // const confirmEmailInput = inputDebug.query(By.css('input[name=confirmEmail]'));
    // const inputConfirmEmailChanged: HTMLInputElement = confirmEmailInput.nativeElement;
    // inputConfirmEmailChanged.value = 'nikita@asd.com';
    // inputConfirmEmailChanged.dispatchEvent(new Event('input'));
    // testUser.confirmEmail = inputConfirmEmailChanged.value;

    // const confirmPasswordInput = inputDebug.query(By.css('input[name=password]'));
    // const inputPasswordChanged: HTMLInputElement = confirmPasswordInput.nativeElement;
    // inputPasswordChanged.value = '123321123';
    // inputPasswordChanged.dispatchEvent(new Event('input'));
    // testUser.password = inputPasswordChanged.value;




    expect(component.registerForm.value.email).toBe(component.registerForm.value.confirmEmail);

    service.create(testUser)
      .pipe(first())
      .subscribe(
        (data) => {
          expect(data['email']).toBe(testUser.email);
          expect(data['password']).toBe(testUser.password);
        },
        (error) => {
          this.loading = false;
        });
    const req = httpMock.expectOne(environment.backUrl + '/users');
    expect(req.request.method).toBe('POST');
    req.flush(testUser);
  });
});

