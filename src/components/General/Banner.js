import React, { Component } from 'react';
import splashImage from '../../resources/FEATUREBANNER-01.jpg';
import { CardMedia } from '@material-ui/core';

class Banner extends Component {

    render() {
        const style = {
            width: "100%",
            objectFit: "cover",
            height: "75h",
        }
        return (<img src={splashImage} style={style}/>);
    }
}

export default Banner;
