import { User } from '../../models/user';
import { AuthActionTypes, All } from '../actions/auth.actions';


export interface State {
    // is a user authenticated?
    isAuthenticated: boolean;
    // if authenticated, there should be a user object
    user: User | null;
    products: any;
    product: any;
    // error message
    errorMessage: string | null;
    delete_product_id: any;
    put_product: any;
    isGet: boolean,
    isCreate: boolean,
    isDelete: boolean,
    isUpdate: boolean,
}

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    products: null,
    errorMessage: null,
    product: null,
    delete_product_id: null,
    put_product: null,
    isGet: false,
    isCreate: false,
    isDelete: false,
    isUpdate: false,
};

export function reducer(state = initialState, action: All): State {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    // token: action.payload.token,
                    email: action.payload.email
                },
                errorMessage: null
            };
        }
        case AuthActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                errorMessage: 'Incorrect email and/or password.'
            };
        }
        case AuthActionTypes.SIGNUP_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    // token: action.payload.token,
                    email: action.payload.email
                },
                errorMessage: null
            };
        }
        case AuthActionTypes.SIGNUP_FAILURE: {
            return {
                ...state,
                errorMessage: 'That email is already in use.'
            };
        }
        case AuthActionTypes.GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                products: action.payload,
                errorMessage: null,
                isGet: true,
                isCreate: false,
                isDelete: false,
                isUpdate: false,
            };
        }
        case AuthActionTypes.GET_PRODUCTS_FAILURE: {
            return {
                ...state,
                errorMessage: 'That email is already in use.'
            };
        }
        case AuthActionTypes.DELETE_PRODUCT_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                delete_product_id: action.payload._id,
                errorMessage: null,
                isGet: false,
                isCreate: false,
                isDelete: true,
                isUpdate: false,
            };
        }
        case AuthActionTypes.DELETE_PRODUCT_FAILURE: {
            return {
                ...state,
                errorMessage: 'That email is already in use.'
            };
        }
        case AuthActionTypes.PUT_PRODUCT_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                put_product: action.payload,
                errorMessage: null,
                isGet: false,
                isCreate: false,
                isDelete: false,
                isUpdate: true,
            };
        }
        case AuthActionTypes.PUT_PRODUCT_FAILURE: {
            return {
                ...state,
                errorMessage: 'That email is already in use.'
            };
        }
        case AuthActionTypes.ADD_PRODUCT_SUCCESS: {
            return {
                ...state,
                product: action.payload,
                errorMessage: 'That email is already in use.',
                isGet: false,
                isCreate: true,
                isDelete: false,
                isUpdate: false,
            };
        }
        case AuthActionTypes.LOGOUT: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
