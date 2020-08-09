import React, {useState} from 'react';
import './EventTile.css'
import {Link} from 'react-router-dom';
import {colors} from "../../styles/colors";
import {Grid, Button, Paper, createStyles} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) => createStyles({
    paper: {
        padding: theme.spacing(4)
    },
    button: {
        backgroundColor: colors.blue["1"],
        color: theme.palette.text.secondary
    },
    loveHeart: {
        cursor: 'pointer',
        verticalAlign: 'middle'
    }
}));

/* Takes props eventName, dateTime, clubName, image, clubLogo */
const EventTile = (props) => {

    const classes = styles();

    const [liked, setLiked] = useState(false);

    function handleLikeClicked() {
        setLiked(!liked)
    }

    function heartSrc() {
        return liked ? 'https://i.imgur.com/JwXaLtf.png' : 'https://i.imgur.com/x4vFBKq.png';
    }

    function formatDate() {
        const date = new Date(props.dateTime);
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes());
    }

    const linkTo = '/events/' + props.id;

    const dateString = formatDate();

    return (
        <Paper className={classes.paper} elevation={4}>
            <Grid container>

                <Grid item xs={6}>
                    <h2 className="title">
                        <Link to={linkTo} style={{
                            textDecoration: 'none',
                            color: colors.blue["1"]
                        }}>
                            <strong>{props.eventName}</strong>
                        </Link>
                        <img onClick={handleLikeClicked} id="heart" className={classes.loveHeart} src={heartSrc()} alt="heartImg" width="50px"
                             height="50px"/>
                    </h2>
                    <h5 className="date"><i className='far fa-calendar-alt'/> {dateString} </h5>
                    <h5><i className='fas fa-dollar-sign'/> {(props.cost > 0) ? props.cost : 'Free'}
                    </h5>
                    <p className="description">{(props.description.length > 270) ? props.description.substring(0, 270) + "\u2022 \u2022 \u2022" : props.description}</p>
                </Grid>

                <Grid item xs={6} container justify={"center"}>
                    <img className="eventImage" src={props.imgLink} alt="eventImg" width="400px"
                         height="300px"/>
                </Grid>

                <Grid item xs={12}>
                    <Button variant={"contained"} className={classes.button} fullWidth
                            component={Link} to={linkTo}
                    >View details</Button>
                </Grid>

            </Grid>
        </Paper>
    );
}

export default EventTile;
