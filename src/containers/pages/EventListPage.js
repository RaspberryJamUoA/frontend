import React from 'react';

import SearchBar from '../../components/Search/SearchBar';
import {Grid, makeStyles} from '@material-ui/core';

import {connect} from "react-redux";
import {updateEvents} from "../../store/events/eventActions";
import EventTile from "../../components/General/EventTile";

class EventListPage extends React.Component {

    componentDidMount() {
        this.props.updateEvents()
    }

    render() {


        const eventJSX = this.props.events.map((event, i) => (
            <Grid item xs={12} key={i}>
                {/* {JSON.stringify(event)} */}
                
                <EventTile eventName = {event.eventName} dateTime = {event.dateTime} clubName= {event.clubName} description = {event.description} cost = {event.cost}/>
            </Grid>)
        );

        const style = {
            border: "2px solid red",
        }

        // console.log(this.props.eventsList)

        return (
            <React.Fragment>
                <SearchBar
                />
                {eventJSX}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    events: state.event.events
})

export default connect(mapStateToProps, {updateEvents})(EventListPage);
