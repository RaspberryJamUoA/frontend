import {AppBar, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {LoginButton} from '../Auth/LoginButton';
import {LogoutButton} from '../Auth/LogoutButton';
import {useAuth0} from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const AppHeader = () => {

    const classes = useStyles();

    const {isAuthenticated, user} = useAuth0();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                {
                    !isAuthenticated &&
                    <LoginButton/>
                }
                {
                    isAuthenticated &&
                    (
                        <React.Fragment>
                            <Typography variant={"h6"}>Hello {user.name}!</Typography>
                            <LogoutButton/>
                        </React.Fragment>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}