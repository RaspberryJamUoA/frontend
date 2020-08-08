import {Button, IconButton, makeStyles, Toolbar, Typography, AppBar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Login} from "../../store/user/userActions";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const AppHeader = () => {

    const dispatch = useDispatch()
    const classes = useStyles();

    const loggedIn = useSelector(s => s.user.loggedIn);

    const handleLogin = () => {
        dispatch(Login('test', 'test'))
    }

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
                    !loggedIn &&
                    <Button color="inherit" onClick={handleLogin}>Login</Button>
                }
                {
                    loggedIn &&
                    <Typography variant={"h6"}>Welcome User!</Typography>
                }
            </Toolbar>
        </AppBar>
    )
}