import React from 'react';

import {Grid} from '@material-ui/core';

import {connect} from "react-redux";
import {updateEvents} from "../../store/events/eventActions";

class EventListPage extends React.Component {

    componentDidMount() {
        this.props.updateEvents()
    }

    render() {

        const eventJSX = this.props.events.map((event, i) => (
            <Grid item xs={12} key={i}>
                {JSON.stringify(event)}
            </Grid>)
        );

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
