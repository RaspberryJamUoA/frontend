import {ADD_EVENT, SET_EVENTS, SET_INITIAL} from "./eventActions";

const initialState = {
    initialEvents: [],
    events: []
}

const eventReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_EVENTS:
            return {...state, events: [...action.payload]}
        case SET_INITIAL:
            return {...state, initialEvents: action.payload}
        case ADD_EVENT:
            const eventsCopy = [...state.events];

            eventsCopy.push(action.payload);

            state.events = eventsCopy;
            break;
        default:
            return state;
    }

    return state;
}

export default eventReducer;
