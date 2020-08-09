import React from "react";
import {AppBar, IconButton, makeStyles, Toolbar, Typography, Grid} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {LoginButton} from '../Auth/LoginButton';
import {LogoutButton} from '../Auth/LogoutButton';
import {useAuth0} from '@auth0/auth0-react';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.secondary
    }
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
                    <Link to={'/'} className={classes.link}>
                        Home
                    </Link>
                </Typography>
                {
                    !isAuthenticated &&
                    <LoginButton/>
                }
                {
                    isAuthenticated &&
                    (
                        <Grid container spacing={1} alignItems={"center"} justify={"flex-end"}>
                            <Grid item>
                                <Typography variant={"h6"}>Hello {user.name}!</Typography>
                            </Grid>
                            <Grid item>
                                <LogoutButton/>
                            </Grid>
                        </Grid>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}