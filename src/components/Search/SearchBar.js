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
    const eventsList = useSelector(s => s.event.events)
    const dispatch = useDispatch();
    const classes = useStyles();

    const [searchTerm, setSearchTerm] = useState('');
    const [timer, setTimer] = useState(null);


    const filterEvents = () => {
        const newEvents = fullList.filter(event => {
            if (searchTerm == null || searchTerm == "" || searchTerm == " ") {
                return true;
            }

            if ((event.description).toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            }
        })

        console.log("New Events Set");
        console.log(newEvents);
        dispatch(setEvents(newEvents));
        console.log(eventsList);
    }

    const queueNewSearchEvent = () => {
        console.log("Queued");
        if (timer !== null) clearTimeout(timer);

        const newTimer = setTimeout(() => {
            filterEvents()
        }, 300);

        setTimer(newTimer);
    }

    const handleSearchChange = (newTerm) => {
        setSearchTerm(newTerm);
        queueNewSearchEvent();
    }

    return (
        <Paper className={classes.paper}>
            <TextField
                variant="outlined"
                id='outlined-basic'
                className={classes.search}
                placeholder="Search for an event"
                value={searchTerm}
                onChange={e => handleSearchChange(e.target.value)}
            />
        </Paper>
    );
}

export default SearchBar;
