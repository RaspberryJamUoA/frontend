import React, {useEffect} from 'react';

import {Container, Grid, Button} from '@material-ui/core';

import {useDispatch, useSelector} from "react-redux";
import {addEvent, updateEvents} from "../../store/events/eventActions";

const EventListPage = () => {

    const dispatch = useDispatch();
    const eventsList = useSelector(s => s.event.events);

    useEffect(() => {
        dispatch(updateEvents());
    }, [dispatch])

    const handleAddEvent = () => {
        dispatch(addEvent('new event string'));
    }

    const eventJSX = eventsList.map((event, i) => (
        <Grid item xs={12} key={i}>
            {event}
        </Grid>
    ))

    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Button onClick={handleAddEvent}
                            variant={"contained"}
                            color={'primary'}
                    >Add Event</Button>
                </Grid>
                {eventJSX}
            </Grid>
        </Container>
    )

}

export default EventListPage;
