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
        },
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(', '),
        h1: {
            fontFamily: ['Poppins', 'sans-serif'].join(', '),
            textTransform: 'capitalize',
            letterSpacing: 0,
            color: '#F4796B'
        },
        h6: {
            textTransform: 'none',
            fontSize: '15px',
            color: ' #ffffff',
            fontWeight: 400
        },
        body1: {
            letterSpacing: 0,
            color: '#ffffff',
        },
        body2: {
            letterSpacing: 0,
            fontSize: '12px',
            color: '#ffffff'
        },
    },
    shape: {
        borderRadius: 20
    },

});

export default Theme;