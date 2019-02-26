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
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthenticationService, UserService } from './_services';
import { reducers } from './store/app.states';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetpwdComponent,
    HeaderComponent,
    SettingsComponent,
    ProductsComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    TabModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    ReactiveFormsModule,
    routing,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
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
export class AppBootstrapModule {}
