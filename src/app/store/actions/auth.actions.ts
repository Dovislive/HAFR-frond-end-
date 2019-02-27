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
    DELETE_PRODUCT = '[Auth] DeleteProduct',
    DELETE_PRODUCT_SUCCESS = '[Auth] DeleteProduct Success',
    DELETE_PRODUCT_FAILURE = '[Auth] DeleteProduct Failure',
    PUT_PRODUCT = '[Auth] PutProduct',
    PUT_PRODUCT_SUCCESS = '[Auth] PutProduct Success',
    PUT_PRODUCT_FAILURE = '[Auth] PutProduct Failure',
    GET_CATEGORIES = '[Auth] GetCategory',
    GET_CATEGORIES_SUCCESS = '[Auth] GetCategory Success',
    GET_CATEGORIES_FAILURE = '[Auth] GetCategory Failure',
    ADD_CATEGORY = '[Auth] AddCategory',
    ADD_CATEGORY_SUCCESS = '[Auth] AddCategory Success',
    ADD_CATEGORY_FAILURE = '[Auth] AddCategory Failure',
    DELETE_CATEGORY = '[Auth] DeleteCategory',
    DELETE_CATEGORY_SUCCESS = '[Auth] DeleteCategory Success',
    DELETE_CATEGORY_FAILURE = '[Auth] DeleteCategory Failure',
    PUT_CATEGORY = '[Auth] PutCategory',
    PUT_CATEGORY_SUCCESS = '[Auth] PutCategory Success',
    PUT_CATEGORY_FAILURE = '[Auth] PutCategory Failure',
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
export class DeleteProduct implements Action {
    readonly type = AuthActionTypes.DELETE_PRODUCT;
    constructor(public payload: any) { }
}
export class DeleteProductSuccess implements Action {
    readonly type = AuthActionTypes.DELETE_PRODUCT_SUCCESS;
    constructor(public payload: any) { }
}
export class DeleteProductFailure implements Action {
    readonly type = AuthActionTypes.DELETE_PRODUCT_FAILURE;
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
export class PutProduct implements Action {
    readonly type = AuthActionTypes.PUT_PRODUCT;
    constructor(public payload: any) { }
}
export class PutProductSuccess implements Action {
    readonly type = AuthActionTypes.PUT_PRODUCT_SUCCESS;
    constructor(public payload: any) { }
}
export class PutProductFailure implements Action {
    readonly type = AuthActionTypes.PUT_PRODUCT_FAILURE;
    constructor(public payload: any) { }
}
export class GetCategories implements Action {
    readonly type = AuthActionTypes.GET_CATEGORIES;
    constructor(public payload: any) { }
}
export class GetCategoriesSuccess implements Action {
    readonly type = AuthActionTypes.GET_CATEGORIES_SUCCESS;
    constructor(public payload: any) { }
}
export class GetCategoriesFailure implements Action {
    readonly type = AuthActionTypes.GET_CATEGORIES_FAILURE;
    constructor(public payload: any) { }
}
export class DeleteCategory implements Action {
    readonly type = AuthActionTypes.DELETE_CATEGORY;
    constructor(public payload: any) { }
}
export class DeleteCategorySuccess implements Action {
    readonly type = AuthActionTypes.DELETE_CATEGORY_SUCCESS;
    constructor(public payload: any) { }
}
export class DeleteCategoryFailure implements Action {
    readonly type = AuthActionTypes.DELETE_CATEGORY_FAILURE;
    constructor(public payload: any) { }
}
export class AddCategory implements Action {
    readonly type = AuthActionTypes.ADD_CATEGORY;
    constructor(public payload: any) { }
}
export class AddCategorySuccess implements Action {
    readonly type = AuthActionTypes.ADD_CATEGORY_SUCCESS;
    constructor(public payload: any) { }
}
export class AddCategoryFailure implements Action {
    readonly type = AuthActionTypes.ADD_CATEGORY_FAILURE;
    constructor(public payload: any) { }
}
export class PutCategory implements Action {
    readonly type = AuthActionTypes.PUT_CATEGORY;
    constructor(public payload: any) { }
}
export class PutCategorySuccess implements Action {
    readonly type = AuthActionTypes.PUT_CATEGORY_SUCCESS;
    constructor(public payload: any) { }
}
export class PutCategoryFailure implements Action {
    readonly type = AuthActionTypes.PUT_CATEGORY_FAILURE;
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
    | GetCategories
    | GetCategoriesSuccess
    | GetCategoriesFailure
    | LogOut
    | GetStatus
    | AddProduct
    | AddProductSuccess
    | AddProductFailure
    | DeleteProduct
    | DeleteProductSuccess
    | DeleteProductFailure
    | PutProduct
    | PutProductSuccess
    | PutProductFailure
    | AddCategory
    | AddCategorySuccess
    | AddCategoryFailure
    | DeleteCategory
    | DeleteCategorySuccess
    | DeleteCategoryFailure
    | PutCategory
    | PutCategorySuccess
    | PutCategoryFailure
