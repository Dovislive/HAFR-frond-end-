import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guards';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetpwdComponent } from './components/auth/resetpwd/resetpwd.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ResetpwdComponent },
    { path: 'profile', component: SettingsComponent, 
    //canActivate: [AuthGuard]
    },
    { path: 'products', component: ProductsComponent },
    // otherwise redirect to home
    {path: 'category', component: CategoryComponent},
    { path: '**', redirectTo: 'login' },
];

export const routing = RouterModule.forRoot(appRoutes);
