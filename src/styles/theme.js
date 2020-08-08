import {createMuiTheme} from "@material-ui/core";
import * as colors from '@material-ui/core/colors';

export const mainTheme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: colors.blue,
            secondary: colors.deepPurple,
            background: {
                default: colors.grey[900],
                paper: colors.grey[800]
            },
            text: {
                primary: colors.common.white,
                secondary: colors.blueGrey['50']
            },
        }
    }
);
