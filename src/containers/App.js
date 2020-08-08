import React from 'react';
import {
    makeStyles,
    CssBaseline,
    ThemeProvider
} from "@material-ui/core";
import {Provider} from 'react-redux';
import clsx from 'clsx';
import {mainTheme} from "../styles/theme";
import {defaultStore} from '../store/store';

import {AppHeader} from "../components/AppBar/AppHeader";
import EventListPage from "./pages/EventListPage";


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

function App() {

    const classes = useStyles();

    return (
        <ThemeProvider theme={mainTheme}>
            <Provider store={defaultStore}>
                <div className={clsx(classes.root)}>
                    <CssBaseline />
                    <AppHeader />
                    <EventListPage />
                </div>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
