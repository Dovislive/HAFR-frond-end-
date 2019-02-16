import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TabModule } from 'angular-tabs-component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetpwdComponent } from './components/auth/resetpwd/resetpwd.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { routing } from './app.routing';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './_guards';
import { SettingsComponent } from './components/settings/settings.component';
//import { ProfileSettingsComponent } from './components/settings/components/profile-settings/profile-settings.component';
import { AuthenticationService, UserService } from './_services';
import { reducers } from './store/app.states';
//import { ComponentProductsComponent } from './components/component-products/component-products.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetpwdComponent,
    HeaderComponent,
    SettingsComponent,
//    ComponentProductsComponent,
    ProductsComponent,
//    ProfileSettingsComponent,
  ],
  imports: [
    BrowserModule,
    TabModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    ReactiveFormsModule,
    routing,
  ],
  exports: [RouterModule],
  providers: [
    AuthenticationService,
    UserService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
