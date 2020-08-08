import React, {useEffect} from 'react';

import {Container, Grid, Button} from '@material-ui/core';

import {connect} from "react-redux";
import {updateEvents} from "../../store/events/eventActions";

class EventListPage extends React.Component {

    componentDidMount() {
        this.props.updateEvents()
    }

    render() {
        console.log('render',this.props.events)

        const eventJSX = this.props.events.map((event, i) => (<Grid item="item" xs={12} key={i}>
            {JSON.stringify(event)}
        </Grid>));

        // console.log(this.props.eventsList)

        return (<React.Fragment>
            {eventJSX}
        </React.Fragment>);
    }
}

const mapStateToProps = state => ({
    events: state.event.events
})

export default connect(mapStateToProps, {updateEvents})(EventListPage);
