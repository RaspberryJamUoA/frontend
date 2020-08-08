import React, { Component } from 'react';

import logo from '../resources/logo.png';
import EventTile from '../components/EventTile.js';
import Navigation from '../components/Navigation.js';

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
    return (
      <div>
        <img src={ logo } alt='Logo' />
        <Navigation />

        <EventTile
          eventName='Event Name'
          clubName='WDCC'
          dateTime='Thursday, 22nd July'
        />

      </div>
    );
  }

}

export default EventListPage;
