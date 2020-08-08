import React, {useEffect} from 'react';

import {Container, Grid, Button} from '@material-ui/core';

import {connect} from "react-redux";
import {updateEvents} from "../../store/events/eventActions";

class EventListPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.updateEvents()
    }

    render() {
        console.log('render',this.props.eventsList)
        const eventJSX = this.props.eventsList.map((event, i) => (<Grid item="item" xs={12} key={i}>
            {event.clubName}
        </Grid>));

        // console.log(this.props.eventsList)

        return (<React.Fragment>
            {eventJSX}
        </React.Fragment>);
    }
}

const mapStateToProps = state => {
    console.log('map', state)
    return {
        eventsList: state.event.events
    }
};

export default connect(mapStateToProps, {updateEvents})(EventListPage);
