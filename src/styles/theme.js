import {createMuiTheme} from "@material-ui/core";
import * as colors from '@material-ui/core/colors';

export const mainTheme = createMuiTheme({
        palette: {
            type: 'light',
            primary: colors.blue,
            secondary: colors.deepPurple,
            background: {
                default: colors.grey[100],
                paper: colors.grey[200]
            },
            text: {
                primary: colors.common.black,
                secondary: colors.blueGrey['50']
            },
        }
    }
);
