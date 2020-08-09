import {createMuiTheme} from "@material-ui/core";
import * as colors from '@material-ui/core/colors';

export const mainTheme = createMuiTheme({
        palette: {
            type: 'light',
            primary: colors.blue,
            secondary: colors.deepPurple,
            background: {
                default: colors.grey[200],
                paper: colors.grey[50]
            },
            text: {
                primary: colors.common.black,
                secondary: colors.blueGrey['50']
            }
        },
        typography: {
            h6: {
                fontWeight: 300
            },
            body2: {
                fontSize: 20,
                fontWeight: 300
            }
        }
    }
);
