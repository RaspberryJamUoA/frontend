import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './user/userReducer';

const mainReducer = combineReducers({
    user: userReducer
})

export const defaultStore = createStore(mainReducer, applyMiddleware(thunk));