import React, {useEffect, useState} from 'react';
import {Container, createStyles, Grid, Paper, Tooltip, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {useParams} from 'react-router-dom';
import {colors} from "../../styles/colors";


const styles = makeStyles(theme => createStyles({
    paper: {
        padding: theme.spacing(4)
    },
    tagIcons: {
        width: 20,
        marginLeft: 10
    },
    titleContainer: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    clubNameHeader: {
        paddingLeft: 20
    },
    logoPic: {
        marginLeft: theme.spacing(4),
        borderRadius: '50%',
        border: '2px solid',
        borderColor: '#e0ded7',
        width: '50px'
    },
    labelText: {
        fontWeight: 500
    },
    heroImage: {
        marginTop: theme.spacing(2),
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${'/media/images/what-is-coding.png'})`,
        height: '29%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        padding: theme.spacing(10),
        borderRadius: 4
    },
    heroText: {
        color: 'white'
    },
    blueButton: {
        backgroundColor: colors.blue["1"]
    }
}))

// export interface IEvent {
//     eventName: string
//     description: string
//     dateTime: Date
//     clubName: string
//     cost: number
//     location: string
//     membershipRequired: boolean
//     keywords: string[]
// }

const EventDetailsPage = () => {

    const {id} = useParams();

    const classes = styles();
    const [clubData, setClubData] = useState(null);

    useEffect(() => {
        fetch('/events/' + id)
            .then(result => result.json())
            .then(data => {
                setClubData(data);
            })
    }, [id])

    console.log(clubData);

    // const clubData = {
    //     clubName: "WDCC x AUCS",
    //     eventName: "WDCC x AUCS Hack Weekend",
    //     date: new Date().toDateString()
    // }

    if (!clubData) return null;

    return (
        <React.Fragment>
            <Container>
                <Grid container className={classes.heroImage} alignItems={"center"} justify={"center"}>
                    <Grid item container justify={"center"} xs={12}>
                        <Typography variant={"h2"} className={classes.heroText}>{clubData.eventName}</Typography>
                    </Grid>
                    <Grid item container justify={"center"} xs={12}>
                        <Typography variant={"h6"} className={classes.heroText}>{clubData.date}</Typography>
                    </Grid>
                </Grid>
                <Grid container className={classes.titleContainer} alignItems={"center"}>
                    <Grid item>
                        <img className={classes.logoPic} src="/media/images/WDCC.png" alt="Avatar"/>
                    </Grid>
                    <Grid item>
                        <Typography variant={"h6"} className={classes.clubNameHeader}>Hosted
                            by {clubData.clubName}</Typography>
                    </Grid>
                </Grid>
                <Paper className={classes.paper} elevation={4}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} container spacing={1} alignItems={"center"}>
                            <Grid item>
                                <Typography variant={"h4"}>{clubData.eventName}</Typography>
                            </Grid>
                            <Grid item>
                                <Tooltip title={'free'}>
                                    <img className={classes.tagIcons} src="/media/images/free.png" alt={'event-img-1'}/>
                                </Tooltip>
                                <Tooltip title={'engineering'}>
                                    <img className={classes.tagIcons} src="/media/images/eng.png" alt={'event-img-2'}/>
                                </Tooltip>
                                <Tooltip title={'popular'}>
                                    <img className={classes.tagIcons} src="/media/images/fire.png" alt={'event-img-3'}/>
                                </Tooltip>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} spacing={1} alignItems={"center"}>
                            <Grid item>
                                <Typography variant={"subtitle1"} className={classes.labelText}>Date:</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"}>{clubData.date}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} spacing={1} alignItems={"center"}>
                            <Grid item>
                                <Typography variant={"subtitle1"} className={classes.labelText}>Location:</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"body1"}>{'42 Sesame St, Auckland 1010 NZ'}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant={"body2"}>
                                {clubData.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant={"contained"} fullWidth color={"primary"}
                                    className={classes.blueButton}
                            >
                                Sign Up!
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>


        </React.Fragment>
    );
}

export default EventDetailsPage;
