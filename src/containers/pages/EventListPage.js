import React, {useEffect} from 'react';

import {Grid} from '@material-ui/core';

import {useDispatch, useSelector} from "react-redux";
import {updateEvents} from "../../store/events/eventActions";

import {Link} from 'react-router-dom';

const EventListPage = () => {

    const dispatch = useDispatch();
    const events = useSelector(s => s.event.events);

    useEffect(() => {
        dispatch(updateEvents());
    }, [])


    const eventJSX = events.map((event, i) => (
        <Grid item xs={12} key={i}>
            <Link to={'/events/' + event['_id']} className>
                {JSON.stringify(event)}
            </Link>
        </Grid>)
    );

    // console.log(this.props.eventsList)

    return (
        <Grid container spacing={1}>
            {eventJSX}
        </Grid>
    );

}

export default EventListPage;
