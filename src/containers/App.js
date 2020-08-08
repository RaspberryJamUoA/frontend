import React from 'react';
import {ThemeProvider} from "@material-ui/core";
import {Provider} from 'react-redux';
import {mainTheme} from "../styles/theme";
import {defaultStore} from '../store/store';
import MainRouter from "./MainRouter";
import {Auth0Provider} from '@auth0/auth0-react';

// https://auth0.com/docs/libraries/auth0-react

const App = () => {
    return (
        <Auth0Provider
            domain="raspberryjam2020.au.auth0.com"
            clientId="BIPYbPA7tbUcDlf7i1t2KKCAWWc48qxW"
            redirectUri={window.location.origin}
            cacheLocation={'localstorage'}
            audience="https://raspberryjam2020.au.auth0.com/api/v2/"
            scope="read:current_user update:current_user_metadata"
        >
            <Provider store={defaultStore}>
                <ThemeProvider theme={mainTheme}>
                    <MainRouter/>
                </ThemeProvider>
            </Provider>
        </Auth0Provider>
    );
}

export default App;
