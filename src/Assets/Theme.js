import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    palette: {
        primary: {
            light: '#2B52A1',
            main: '#1D376C',
            dark: '#112140',
            contrastText: '#FFFFFF',
        },
        secondary: {
            light: '#E74B4B',
            main: '#E22726',
            dark: '#C51B1B',
            contrastText: '#FFFFFF',
        },
        text: {
            primary: '#B1B1B1',
            secondary: '#DADADA',
        }
    },

    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(', '),
    },
    shape: {
        borderRadius: 20
    },

});

export default Theme;