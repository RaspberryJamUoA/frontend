import React, {Component} from 'react';
import splashImage from '../../resources/FEATUREBANNER-01.jpg';

class Banner extends Component {

    render() {
        const style = {
            width: "100%",
            objectFit: "cover",
            height: "75h",
        }
        return (<img src={splashImage} style={style} alt=''/>);
    }
}

export default Banner;
