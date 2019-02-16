import { async, ComponentFixture, TestBed, inject, getTestBed } from '@angular/core/testing';
import { Injectable, Injector } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { AuthenticationService, UserService } from '../../../_services';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ResetpwdComponent } from './resetpwd.component';
import { first } from 'rxjs/operators';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User } from '../../../models/user';
import { environment } from '../../../../environments/environment';

describe('ResetpwdComponent', () => {
  let component: ResetpwdComponent;
  let fixture: ComponentFixture<ResetpwdComponent>;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [ResetpwdComponent, ],
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
    fixture = TestBed.createComponent(ResetpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('reset password request', () => {
    expect(component).toBeTruthy();
    const testUser = new User;

    const inputDebug: DebugElement = fixture.debugElement;

    const emailInput = inputDebug.query(By.css('input[name=email]'));
    const inputEmailChanged: HTMLInputElement = emailInput.nativeElement;
    inputEmailChanged.value = 'nikita@asd.com';
    inputEmailChanged.dispatchEvent(new Event('input'));

    testUser.email = inputEmailChanged.value;

    service.forgotPassword(testUser)
      .pipe(first())
      .subscribe(
        (data) => {
          expect(data['email']).toBe(testUser.email);
        },
        (error) => {
          this.loading = false;
        });
    const req = httpMock.expectOne(environment.backUrl + `/forgot_password`);
    expect(req.request.method).toBe('POST');
    req.flush(testUser);
  });
});
