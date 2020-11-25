import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    palette: {
        primary: {
            light: '#2B52A1', // light blue
            main: '#1D376C', //blue
            dark: '#112140',  //dark blue
            contrastText: '#FFFFFF', //white
        },
        secondary: {
            light: '#E74B4B', //light red
            main: '#E22726', //red
            dark: '#C51B1B', //dark red
            contrastText: '#FFFFFF', //white
        },
        text: {
            primary: '#B1B1B1', //gray
            secondary: '#DADADA', //light gray
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