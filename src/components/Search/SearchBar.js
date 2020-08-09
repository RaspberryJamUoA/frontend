import React, {useState} from 'react';

import {Paper, TextField, Grid, Button} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {setEvents} from "../../store/events/eventActions";
import {useDispatch, useSelector} from "react-redux";
import {NewEventDialog} from "../General/NewEvent";

const useStyles = makeStyles((theme) => ({
    search: {

    },
    paper: {
        padding: theme.spacing(1)
    }
}));

export const SearchBar = () => {

    const fullList = useSelector(s => s.event.initialEvents);
    const dispatch = useDispatch();
    const classes = useStyles();

    const [isOpen, setOpen] = useState(false);
    const [timer, setTimer] = useState(null);


    const filterEvents = (searchTerm) => {
        const newEvents = fullList.filter(event => {
            if (searchTerm == null || searchTerm === "" || searchTerm === " ") {
                return true;
            }

            if ((event.clubName).toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            }
            if ((event.eventName).toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            }

            if ((event.description).toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            }
            return false;
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
            <Grid container>
                <Grid item xs={3}/>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        id='outlined-basic'
                        className={classes.search}
                        placeholder="Search for an event"
                        onChange={e => {
                            handleSearchChange(e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={3} container justify={"flex-end"}>
                    <Button variant={"contained"} color={"default"}
                            onClick={() => setOpen(true)}
                    >
                        New
                    </Button>
                </Grid>
                <NewEventDialog open={isOpen} onClose={() => setOpen(false)}/>
            </Grid>

        </Paper>
    );
}

export default SearchBar;
