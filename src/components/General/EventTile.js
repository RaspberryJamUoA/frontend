import React, { Component } from 'react';
import './EventTile.css'

/* Takes props eventName, dateTime, clubName, image, clubLogo */
class EventTile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            liked: false
        }
    }

    handleLikeClicked() {
        this.setState({
            liked: !this.state.liked
        })
    }

    heartSrc() {
        return this.state.liked ? 'https://i.imgur.com/JwXaLtf.png' : 'https://i.imgur.com/x4vFBKq.png';
    }

    formatDate() {
        const date = new Date(this.props.dateTime);
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + ((date.getMinutes() < 10) ? '0' +date.getMinutes() : date.getMinutes()) ;
    }

    useStyles() {

    }

    render() {
        const dateString = this.formatDate();
        return (
            <div className="body">
                <div className="events">
                    <div className='cardContent'>
                        <h2 className="title"><strong>{this.props.eventName}</strong></h2>
                        <h5 className="date"><i className='far fa-calendar-alt'></i>  {dateString} </h5>
                        <h5> <i className='fas fa-dollar-sign'></i> {(this.props.cost > 0) ?  this.props.cost : 'Free' }</h5>
                        <p className="description">{(this.props.description.length > 320) ? this.props.description.substring(0,320) + "\u2022 \u2022 \u2022" :this.props.description}</p>
                    </div>

                    <div className="imgContainer">
                        <div className="heartOverlay" onClick={() => this.handleLikeClicked()}> 
                            <img id="heart" className="loveheart" src={this.heartSrc()} alt="heartImg" width="50px" height="50px"></img>
                        </div>
                        <img className="eventImage" src={this.props.imgLink} alt="eventImg" width="400px" height="300px" ></img>
                    </div>
                </div>
            </div>
        );
    }

}

export default EventTile;
