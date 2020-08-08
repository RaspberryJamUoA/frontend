import {fetchEvents} from "../../api/events";
import {makeAction} from "../factory/makeAction";

export const SET_EVENTS = 'SET_EVENTS';
const setEvents = (eventList) => makeAction(SET_EVENTS, eventList);

export const updateEvents = () => {
    return async (dispatch, store) => {
        // const res = await fetchEvents();

        // dispatch(setEvents(res.data))
    }
}

export const ADD_EVENT = 'ADD_EVENT';
export const addEvent = (event) => makeAction(ADD_EVENT, event)