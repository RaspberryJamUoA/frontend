import {LOGIN_SUCCESS} from "./userActions";

const initialState = {
    loggedIn: false
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_SUCCESS:
            state.loggedIn = true;
            return state;
        default:
            return state;
    }

}

export default userReducer;