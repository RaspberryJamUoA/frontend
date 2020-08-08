import {ADD_EVENT, SET_EVENTS} from "./eventActions";

const initialState = {
    events: []
}

const eventReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_EVENTS:
            state.events = action.payload;
            break;
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