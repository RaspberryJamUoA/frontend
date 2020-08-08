import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './user/userReducer';
import eventReducer from "./events/eventReducer";

const mainReducer = combineReducers({
    user: userReducer,
    event: eventReducer
})

export const defaultStore = createStore(mainReducer, applyMiddleware(thunk));