import React from 'react';
import {Button} from '@material-ui/core';
import {useAuth0} from '@auth0/auth0-react';

export const LogoutButton = () => {

    const {
        isAuthenticated,
        logout,
    } = useAuth0();

    const handleClick = () => {
        if (!isAuthenticated) return;
        logout({ returnTo: window.location.origin });
    }

    return (
        <Button onClick={() => handleClick()} variant={"contained"} color={"default"}>
            Logout
        </Button>
    )
}