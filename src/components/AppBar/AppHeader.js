import React from "react";
import {AppBar, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {LoginButton} from '../Auth/LoginButton';
import {LogoutButton} from '../Auth/LogoutButton';
import {useAuth0} from '@auth0/auth0-react';
import {Link} from 'react-router-dom';
import {colors} from "../../styles/colors";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        fontWeight: 1000,
        color: colors.blue["1"],
        flexGrow: 1,
        minWidth: 300,
        fontSize: 16,
        letterSpacing: 4,
        padding: 16
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    },
    appBarLogo: {
        width: '80px',
        height: 'auto'
    },
    text: {
        color: colors.blue["1"],
        fontSize: 16
    }
}));

export const AppHeader = () => {

    const classes = useStyles();

    const {isAuthenticated, user} = useAuth0();

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                {/*    <MenuIcon/>*/}
                {/*</IconButton>*/}

                <Link to={'/'} className={classes.link}>
                    <img src={'/media/images/logo.png'} alt={'logo'} className={classes.appBarLogo}/>
                </Link>

                <Link to={'/'} className={classes.link}>
                    <Typography variant="h6" className={classes.title}>
                        What's poppin'?
                    </Typography>
                </Link>

                {
                    !isAuthenticated &&
                    <Grid container spacing={1} alignItems={"center"} justify={"flex-end"}>
                        <Grid item>
                            <LoginButton/>
                        </Grid>
                    </Grid>
                }
                {
                    isAuthenticated &&
                    (
                        <Grid container spacing={1} alignItems={"center"} justify={"flex-end"}>
                            <Grid item>
                                <Typography variant={"h6"} className={classes.text}>Hello {user.name}!</Typography>
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