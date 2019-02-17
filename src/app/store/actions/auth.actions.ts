import { Action } from '@ngrx/store';


export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    SIGNUP = '[Auth] Signup',
    SIGNUP_SUCCESS = '[Auth] Signup Success',
    SIGNUP_FAILURE = '[Auth] Signup Failure',
    LOGOUT = '[Auth] Logout',
    GET_STATUS = '[Auth] GetStatus',
    GET_PRODUCTS = '[Auth] GetProducts',
    GET_PRODUCTS_SUCCESS = '[Auth] GetProducts Success',
    GET_PRODUCTS_FAILURE = '[Auth] GetProducts Failure',
    ADD_PRODUCT = '[Auth] AddProduct',
    ADD_PRODUCT_SUCCESS = '[Auth] AddProduct Success',
    ADD_PRODUCT_FAILURE = '[Auth] AddProduct Failure',
}

export class GetProducts implements Action {
    readonly type = AuthActionTypes.GET_PRODUCTS;
    constructor(public payload: any) { }
}
export class GetProductsSuccess implements Action {
    readonly type = AuthActionTypes.GET_PRODUCTS_SUCCESS;
    constructor(public payload: any) { }
}
export class GetProductsFailure implements Action {
    readonly type = AuthActionTypes.GET_PRODUCTS_FAILURE;
    constructor(public payload: any) { }
}

export class AddProduct implements Action {
    readonly type = AuthActionTypes.ADD_PRODUCT;
    constructor(public payload: any) { }
}
export class AddProductSuccess implements Action {
    readonly type = AuthActionTypes.ADD_PRODUCT_SUCCESS;
    constructor(public payload: any) { }
}
export class AddProductFailure implements Action {
    readonly type = AuthActionTypes.ADD_PRODUCT_FAILURE;
    constructor(public payload: any) { }
}
export class LogIn implements Action {
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload: any) { }
}

export class LogInSuccess implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload: any) { }
}

export class LogInFailure implements Action {
    readonly type = AuthActionTypes.LOGIN_FAILURE;
    constructor(public payload: any) { }
}

export class SignUp implements Action {
    readonly type = AuthActionTypes.SIGNUP;
    constructor(public payload: any) { }
}

export class SignUpSuccess implements Action {
    readonly type = AuthActionTypes.SIGNUP_SUCCESS;
    constructor(public payload: any) { }
}

export class SignUpFailure implements Action {
    readonly type = AuthActionTypes.SIGNUP_FAILURE;
    constructor(public payload: any) { }
}

export class LogOut implements Action {
    readonly type = AuthActionTypes.LOGOUT;
}

export class GetStatus implements Action {
    readonly type = AuthActionTypes.GET_STATUS;
}

export type All =
    | LogIn
    | LogInSuccess
    | LogInFailure
    | SignUp
    | SignUpSuccess
    | SignUpFailure
    | GetProducts
    | GetProductsSuccess
    | GetProductsFailure
    | LogOut
    | GetStatus;
