import React from 'react';
import {
    makeStyles,
    CssBaseline
} from "@material-ui/core";
import clsx from 'clsx';

import EventListPage from "./pages/EventListPage";
import {AppHeader} from "../components/AppBar/AppHeader";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

function App() {

    const classes = useStyles();

    return (
        <div className={clsx(classes.root)}>
            <CssBaseline />
            <AppHeader/>
            <EventListPage />;
        </div>
    );
}

export default App;
