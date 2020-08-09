import React, {useState} from 'react';
import {
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    Button, useTheme
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";
import {addEvent} from "../../store/events/eventActions";

export const NewEventDialog = (props) => {

    const theme = useTheme();
    const dispatch = useDispatch();

    const [eventName, setEventName] = useState('');

    const testEvent = {
        "cost": {"$numberInt": "120"},
        "dateTime": new Date().toISOString(),
        "description": "Welcome to the CAI Carnival! Get down to the fairground and party the night away. It’s going to be a stellar night and you won’t believe the sponsors we have!",
        "eventName": "CAI 2020 Ball",
        "location": "Auckland Museum",
        "membershipRequired": false,
        "clubName": "SUPA, SOMSA",
        "imageLink": "https://i.imgur.com/RlRELOM.jpg",
        "bannerLink": "https://i.imgur.com/WbPIcey.jpg"
    }

    const handleSubmit = () => {
        dispatch(addEvent({
            ...testEvent,
            eventName: eventName
        }))
    }

    return (
        <Dialog open={props.open}
                onClose={props.onClose}
                fullWidth
                maxWidth={"sm"}
        >
            <DialogTitle>New Event</DialogTitle>
            <DialogContent>
                <DialogContentText style={{
                    color: theme.palette.text.primary
                }}>
                    Create an event here
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Event Name"
                    type="string"
                    fullWidth
                    value={eventName}
                    onChange={e => setEventName(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => handleSubmit()} color="primary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}