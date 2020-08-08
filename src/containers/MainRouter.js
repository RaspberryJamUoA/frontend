import {CssBaseline, makeStyles} from "@material-ui/core";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import clsx from "clsx";
import {AppHeader} from "../components/AppBar/AppHeader";

import EventListPage from "./pages/EventListPage";
import React from "react";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const MainRouter = () => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <div className={clsx(classes.root)}>
                <CssBaseline/>
                <AppHeader/>
                <Switch>
                    <Route exact path={'/'} component={EventListPage}/>
                    <Route exact path={'/events'} component={EventListPage}/>
                    <Route component={() => 'notfound'}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default MainRouter;