import { User } from '../../models/user';
import { AuthActionTypes, All } from '../actions/auth.actions';


export interface State {
    // is a user authenticated?
    isAuthenticated: boolean;
    // if authenticated, there should be a user object
    user: User | null;
    products: any;
    // error message
    errorMessage: string | null;
}

export const initialState: State = {
    isAuthenticated: false,
    user: null,
    products: null,
    errorMessage: null
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
                errorMessage: null
            };
        }
        case AuthActionTypes.GET_PRODUCTS_FAILURE: {
            return {
                ...state,
                errorMessage: 'That email is already in use.'
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
