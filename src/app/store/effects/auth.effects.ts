import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { first, tap, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { AuthenticationService } from '../../_services';
import {
    AuthActionTypes,
    LogIn,
    LogInSuccess,
    LogInFailure,
    AddProduct,
    AddProductSuccess,
    AddProductFailure,
    GetProducts,
    GetProductsSuccess,
    GetProductsFailure,
    DeleteProduct,
    DeleteProductSuccess,
    DeleteProductFailure,
    PutProduct,
    PutProductSuccess,
    PutProductFailure,
} from '../actions/auth.actions';


@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private authService: AuthenticationService,
        private router: Router,
    ) { }
    // Login    
    @Effect()
    LogIn: Observable<any> = this.actions
        .ofType(AuthActionTypes.LOGIN)
        .map((action: LogIn) => action.payload)
        .switchMap(payload => {
            console.log(33, payload);
            return this.authService.login(payload.email, payload.password)    //   .pipe(first())
                .map((user) => {
                    console.log(37, user);
                    return new LogInSuccess({ token: user.token, email: payload.email });
                })
                .catch((error) => {
                    console.log(41, error);
                    return Observable.of(new LogInFailure({ error: error }));
                });
        });


    @Effect({ dispatch: false })
    LogInSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', user.payload.token);
            this.router.navigateByUrl('/');
        })
    );

    @Effect({ dispatch: false })
    LogInFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_FAILURE)
    );


    // AddProduct
    @Effect()
    AddProduct: Observable<any> = this.actions
        .ofType(AuthActionTypes.ADD_PRODUCT)
        .map((action: AddProduct) => action.payload)
        .switchMap(payload => {
            console.log(33, payload);
            return this.authService.AddProduct(payload)    //   .pipe(first())
                .map((product) => {
                    console.log(78, product);
                    return new AddProductSuccess(product);
                })
                .catch((error) => {
                    console.log(41, error);
                    return Observable.of(new AddProductFailure({ error: error }));
                });
        });


    @Effect({ dispatch: false })
    AddProductSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.ADD_PRODUCT_SUCCESS),
        tap((product) => {
            // localStorage.setItem('token', product.payload.token);
            // this.router.navigateByUrl('/');
        })
    );

    @Effect({ dispatch: false })
    AddProductFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.ADD_PRODUCT_FAILURE)
    );
    
    // DeleteProduct
    @Effect()
    DeleteProduct: Observable<any> = this.actions
        .ofType(AuthActionTypes.DELETE_PRODUCT)
        .map((action: DeleteProduct) => action.payload)
        .switchMap(payload => {
            return this.authService.DeleteProduct(payload)    //   .pipe(first())
                .map((product) => {
                    return new DeleteProductSuccess(product);
                })
                .catch((error) => {
                    console.log(41, error);
                    return Observable.of(new DeleteProductFailure({ error: error }));
                });
        });


    @Effect({ dispatch: false })
    DeleteProductSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.DELETE_PRODUCT_SUCCESS),
        tap((product) => {
        })
    );

    @Effect({ dispatch: false })
    DeleteProductFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.DELETE_PRODUCT_FAILURE)
    );
    // PutProduct
    @Effect()
    PutProduct: Observable<any> = this.actions
        .ofType(AuthActionTypes.PUT_PRODUCT)
        .map((action: PutProduct) => action.payload)
        .switchMap(payload => {
            return this.authService.PutProduct(payload)    //   .pipe(first())
                .map((product) => {
                    return new PutProductSuccess(product);
                })
                .catch((error) => {
                    console.log(41, error);
                    return Observable.of(new PutProductFailure({ error: error }));
                });
        });


    @Effect({ dispatch: false })
    PutProductSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.PUT_PRODUCT_SUCCESS),
        tap((product) => {
        })
    );

    @Effect({ dispatch: false })
    PutProductFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.PUT_PRODUCT_FAILURE)
    );

    // GetProducts 
    @Effect()
    GetProducts: Observable<any> = this.actions
        .ofType(AuthActionTypes.GET_PRODUCTS)
        .map((action: GetProducts) => action.payload)
        .switchMap(payload => {
            console.log(33, payload);
            return this.authService.getProducts(payload)    //   .pipe(first())
                .map((product) => {
                    console.log(37, product);
                    return new GetProductsSuccess(product);
                })
                .catch((error) => {
                    console.log(41, error);
                    return Observable.of(new GetProductsFailure({ error: error }));
                });
        });


    @Effect({ dispatch: false })
    GetProductsSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.ADD_PRODUCT_SUCCESS),
        tap((product) => {
            // localStorage.setItem('token', product.payload.token);
            // this.router.navigateByUrl('/');
        })
    );

    @Effect({ dispatch: false })
    GetProductsFailure: Observable<any> = this.actions.pipe(
        ofType(AuthActionTypes.ADD_PRODUCT_FAILURE)
    );

}
