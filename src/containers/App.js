import React from 'react';
import {
    AppBar,
    Button,
    makeStyles,
    Toolbar,
    IconButton,
    Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

import EventListPage from "./pages/EventListPage";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root)}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <EventListPage />;
        </div>
    );
}

export default App;
