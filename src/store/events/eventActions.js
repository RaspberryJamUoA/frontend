
import {
    makeAction
} from "../factory/makeAction";

export const SET_EVENTS = 'SET_EVENTS';
export const setEvents = (eventList) => makeAction(SET_EVENTS, eventList);

export const SET_INITIAL = 'SET_INITIAL';
export const setInitialEvents = (eventList) => makeAction(SET_INITIAL, eventList);

export const updateEvents = () => {
    return async (dispatch, store) => {
        const result = await fetch('/events');
        if (!result) return;
        const awaitedResults = await result.json();
        dispatch(setEvents(awaitedResults));
        dispatch(setInitialEvents(awaitedResults));
    }
}

export const ADD_EVENT = 'ADD_EVENT';
export const addEvent = (event) => makeAction(ADD_EVENT, event);
