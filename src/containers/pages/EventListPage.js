import React, {Component} from 'react';

import logo from '../../resources/logo.png';
import EventTile from '../../components/General/EventTile.js';
import Navigation from '../../components/General/Navigation.js';

class EventListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};


    }

    componentDidMount() {
        fetch('/events')
            .then(res => res.json())
            .then(
                (result) => this.setState(
                    {
                        isLoaded: true,
                        events: result
                    }
                )
            )
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        let listItems;

        if (this.state.events) {
            listItems = this.state.events.map((event, index) => (
                <li key={index}>
                    <EventTile
                        eventName={event.eventName}
                        clubName={event.clubName}
                        dateTime={event.dateTime}
                    />
                </li>
            ));
        } else {
            listItems = [];
        }


        return (
            <div>
                <img src={logo} alt='Logo'/>
                <Navigation/>

                <ul>{listItems}</ul>

            </div>
        );
    }

}

export default EventListPage;
