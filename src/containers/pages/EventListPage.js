import React, {useEffect} from 'react';

import SearchBar from '../../components/Search/SearchBar';
import {Grid, Container, useTheme} from '@material-ui/core';

import {useDispatch, useSelector} from "react-redux";
import {updateEvents} from "../../store/events/eventActions";
import EventTile from "../../components/General/EventTile";

const EventListPage = () => {

    const dispatch = useDispatch();
    const events = useSelector(s => s.event.events);
    const theme = useTheme()

    useEffect(() => {
        dispatch(updateEvents());
    }, [dispatch])


    const eventJSX = events.map((event, i) => (
        <Grid item xs={12} key={i}>
            <EventTile id={event['_id']} eventName={event.eventName} dateTime={event.dateTime} clubName={event.clubName}
                       description={event.description} cost={event.cost} imgLink={event.imageLink}/>
        </Grid>)
    );

    // console.log(this.props.eventsList)

    return (
        <React.Fragment>
            <Container>
                <Grid container spacing={3} style={{
                    marginTop: theme.spacing(2)
                }}>
                    <Grid item xs={12}>
                        <SearchBar/>
                    </Grid>
                    {eventJSX}
                </Grid>
            </Container>
        </React.Fragment>
    );


}

export default EventListPage;
