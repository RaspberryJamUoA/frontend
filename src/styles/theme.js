import {createMuiTheme} from "@material-ui/core";
import * as colors from '@material-ui/core/colors';

const manrope = {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Manrope'),
    url('/fonts/manrope.ttf') format('truetype')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

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
                primary: '#14487e',
                secondary: colors.blueGrey['50']
            }
        },
        typography: {
            fontFamily: [
                'Manrope',
                'sans-serif'
            ].join(','),
            h1: {
                fontFamily: 'Manrope'
            },
            h2: {
                fontFamily: 'Manrope'
            },
            h3: {
                fontFamily: 'Manrope'
            },
            h4: {
                fontFamily: 'Manrope'
            },
            body1: {
                fontFamily: 'Manrope'
            },
            body2: {
                fontSize: 20,
                fontWeight: 300,
                fontFamily: 'Manrope'
            },
            h6: {
                fontWeight: 300,
                fontFamily: 'Manrope'
            }
        },
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '@font-face': [manrope],
                },
            },
        },
    }
);
