
import { async, ComponentFixture, TestBed, inject, getTestBed } from '@angular/core/testing';
import { Injectable, Injector } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { AuthenticationService } from '../../../_services';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { first } from 'rxjs/operators';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User } from '../../../models/user';
import { environment } from '../../../../environments/environment';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: AuthenticationService;

  beforeEach(async(() => {
    const userServiceStub = {
      isLoggedIn: true,
      user: {
        email: 'qwerty@.com',
        password: 'zxc123321'
      }
    };

    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [LoginComponent, ],
      providers: [{
        provide: AuthenticationService,
        useClass: AuthenticationService,
      }]
    })
      .compileComponents();
    injector = getTestBed();
    service = injector.get(AuthenticationService);
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Test title', () => {
    fixture.detectChanges();
    const title: DebugElement = fixture.debugElement;
    const paragraphDe = title.query(By.css('.auth__logo-text'));
    const div: HTMLElement = paragraphDe.nativeElement;
    expect(div.textContent).toEqual('Squibler');
  });
  it('Test login request', () => {
    fixture.detectChanges();
    const inputDebug: DebugElement = fixture.debugElement;

    const paragraphDe1 = inputDebug.query(By.css('input[name=email]'));
    const inputEmailChanged: HTMLInputElement = paragraphDe1.nativeElement;
    inputEmailChanged.value = 'nikita@asd.com';
    inputEmailChanged.dispatchEvent(new Event('input'));

    const paragraphDe2 = inputDebug.query(By.css('input[name=password]'));
    const inputPasswordChanged: HTMLInputElement = paragraphDe2.nativeElement;
    inputPasswordChanged.value = '123321123';
    inputPasswordChanged.dispatchEvent(new Event('input'));

    const dummyUsers = {
      login: inputEmailChanged.value,
      password: inputPasswordChanged.value
    };

    const items = component.loginForm.value;
    service.login(items.email, items.password).subscribe(user => {
      expect(user.login).toEqual(component.loginForm.value.email);
    });

    const req = httpMock.expectOne(environment.backUrl + '/login');
    expect(req.request.method).toBe('POST');
    req.flush(dummyUsers);

  });
});
