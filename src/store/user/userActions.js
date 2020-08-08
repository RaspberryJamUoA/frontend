import {makeAction} from "../factory/makeAction";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LoginSuccess = (user) => makeAction(LOGIN_SUCCESS, user);

export const Login = (username, password) => {
    return async (dispatch, store) => {
        //
        dispatch(LoginSuccess())
    }
}
