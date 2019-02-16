import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService, UserService } from '../../_services';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeaderComponent } from '../layout/header/header.component';
import { SettingsComponent } from './settings.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { TabModule } from 'angular-tabs-component';

class TestAuthenticationService extends AuthenticationService {
  // mock everything used by the component
}
class TestUserService extends AuthenticationService {
  // mock everything used by the component
}

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        TabModule
      ],
      declarations: [SettingsComponent, HeaderComponent, ProfileSettingsComponent],
      providers: [{
        provide: AuthenticationService,
        useClass: TestAuthenticationService
      },
      {
        provide: UserService,
        useClass: TestUserService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test success allert', fakeAsync(() => {
    expect(component.success).toBeFalsy();
    component.onSuccess();
    expect(component.success).toBeTruthy();
    tick(2000);
    fixture.detectChanges();
    expect(component.success).toBeFalsy();
  }));
});
