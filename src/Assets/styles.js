import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    //login
    imgLogin: {
        height: '100vh'
    },
    loginContainer: {
        backgroundColor: '#1D376C',
        margin: 0,
        height: '100vh'
    },
    imgLogo: {
        width: '300px'
    },
    inputContainer: {
        margin: '15px',
    },
    inputLogin: {
        borderRadius: '20px',
        height: '30px',
        padding: ' 5px 10px',
        margin: '5px',
        backgroundColor: 'white',
        color: 'black !important',
        width: '250px',
        fontSize: '12px',
    },
    remeberOpt: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'fit-content',
        marginTop: '35px',
    },
    btnPassword: {
        textTransform: 'none',
        color: '#ffffff',
        fontWeight: 400,
    },
    modalPassword: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        alignItems: 'center',
    },
    root: {
        width: '70%',
        height: '60%',
    }
});

export default useStyles;