import React, { Component, useState } from 'react';

import {Container, createStyles, Grid, Paper, Tooltip, Typography, TextField, sizing} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {setEvents} from "../../store/events/eventActions";
import {useSelector, useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
    search: {
        margin: '0 30%',
        width: "40%",
    },
    paper: {
        padding: theme.spacing(1)
    }
}));

export const SearchBar = () => {

    const fullList = useSelector(s => s.event.initialEvents);
    const eventsList = useSelector(s => s.event.events);
    const dispatch = useDispatch();
    const classes = useStyles();

    const [timer, setTimer] = useState(null);


    const filterEvents = (searchTerm) => {
        const newEvents = fullList.filter(event => {
            if (searchTerm == null || searchTerm == "" || searchTerm == " ") {
                return true;
            }

            if ((event.clubName).toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            } if ((event.eventName).toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            }

            if ((event.description).toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            }
        })

        dispatch(setEvents(newEvents));
    }

    const queueNewSearchEvent = (newTerm) => {
        if (timer !== null) clearTimeout(timer);

        const newTimer = setTimeout(() => {
            filterEvents(newTerm)
        }, 300);

        setTimer(newTimer);
    }

    const handleSearchChange = (newTerm) => {
        queueNewSearchEvent(newTerm);
    }

    return (
        <Paper className={classes.paper}>
            <TextField
                variant="outlined"
                id='outlined-basic'
                className={classes.search}
                placeholder="Search for an event"
                onChange={e => {handleSearchChange(e.target.value)}}
            />
        </Paper>
    );
}

export default SearchBar;
