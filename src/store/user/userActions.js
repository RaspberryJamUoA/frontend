import {makeAction} from "../factory/makeAction";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LoginSuccess = (user) => makeAction(LOGIN_SUCCESS, user)

export const Login = (username, password) => {
    return (dispatch, store) => {
        dispatch(LoginSuccess())
    }
}