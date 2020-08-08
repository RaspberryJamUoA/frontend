import React from 'react';

// Pages

import EventListPage from './pages/EventListPage.js';
import EventPage from './pages/EventPage.js';
import LoginPage from './pages/LoginPage.js';


class App extends React.Component {

  componentDidMount() {
    // Make something call here to get all event tiles
  }

  render() {
    return <EventListPage />;
  }
}

export default App;
