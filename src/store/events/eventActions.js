
import {
    makeAction
} from "../factory/makeAction";

export const SET_EVENTS = 'SET_EVENTS';
const setEvents = (eventList) => makeAction(SET_EVENTS, eventList);

export const updateEvents = () => {
    return async (dispatch, store) => {
        const result = await fetch('/events');
        if (!result) return;
        dispatch(setEvents(await result.json()))
    }
}

export const ADD_EVENT = 'ADD_EVENT';
export const addEvent = (event) => makeAction(ADD_EVENT, event)
