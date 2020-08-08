import React from 'react';
import {ThemeProvider} from "@material-ui/core";
import {Provider} from 'react-redux';
import {mainTheme} from "../styles/theme";
import {defaultStore} from '../store/store';
import MainRouter from "./MainRouter";

const App = () => {
    return (
        <Provider store={defaultStore}>
            <ThemeProvider theme={mainTheme}>
                <MainRouter/>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
