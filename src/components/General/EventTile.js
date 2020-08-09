import React, {Component} from 'react';


/* Takes props eventName, dateTime, clubName, image, clubLogo */
class EventTile extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    useStyles() {

    }

    render() {
        return (
            <div>
                <img className='event-image' src={this.props.image} alt='Event'/>
                <h3 className='event-title'>{this.props.eventName}</h3>
                <h4 className='event-time'>{this.props.dateTime}</h4>
                <h4 className='event-clubname'>{this.props.clubName}</h4>

                <img className='event-club-logo' src={this.props.clubLogo} alt='Club'/>
            </div>
        );
    }

}

export default EventTile;
