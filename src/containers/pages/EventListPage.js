import React, {useEffect} from 'react';

import SearchBar from '../../components/Search/SearchBar';
import {Grid} from '@material-ui/core';

import {useDispatch, useSelector} from "react-redux";
import {updateEvents} from "../../store/events/eventActions";
import EventTile from "../../components/General/EventTile";
import Banner from "../../components/General/Banner.js";

const EventListPage = () => {

    const dispatch = useDispatch();
    const events = useSelector(s => s.event.events);

    useEffect(() => {
        dispatch(updateEvents());
    }, [])


    const eventJSX = events.map((event, i) => (
        <Grid item xs={12} key={i}>
            <EventTile eventName={event.eventName} dateTime={event.dateTime} clubName={event.clubName}
                       description={event.description} cost={event.cost} imgLink={event.imageLink}/>
        </Grid>)
    );

    // console.log(this.props.eventsList)

    return (
        <React.Fragment>
            <SearchBar/>
            <Banner />
            {eventJSX}
        </React.Fragment>
    );


}

export default EventListPage;
