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
    },
    bckNavbar: {
        background: '#fafafa'
    },
    link: {
        textDecoration: 'none',
        color: '#ffffff',
        textTransform: 'none',
    },
    //menu
    menu: {
        display: 'flex'
    },
    appbar: {
        background: '#1D376C',
        height: '100vh',
        width: '80px'
    },
    logoMenu: {
        width: '50px',
        margin: '10px',
        position: 'relative',
        top: '20px',
        left: '10px',
    },
    logoMenu2: {
        width: '75px',
        margin: '10px',
        position: 'relative',
        top: '20px',
        left: '30px',
    },
    optMenu: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '175px',
        position: 'relative',
        top: '40px',
        left: '19px'
    },
    iconDrawer2: {
        fontSize: '20px',
        color: ' #ffffff',
        position: 'relative',
        left: '12px',
    },
    //drawer
    drawer: {
        background: '#1D376C !important',
        width: '250px'
    },
    iconDrawer: {
        fontSize: '20px',
        color: ' #ffffff',
        position: 'relative',
        left: '12px',
    },
    listDrawer: {
        position: 'relative',
        top: '20px'
    },
    btnDrawerOpt: {
        width: '200px',
        display: 'flex !important',
        justifyContent: 'flex-start !important',
    },
    divider: {
        borderBottom: 'solid 1px #ffffff',
        margin: '10px',
    },
    //legal table
    browserLegal: {
        margin: '30px 0 20px 73px'
    },
    tableContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // all petitions
    browserPetition: {
        display: ' flex',
        justifyContent: 'space-between',
        margin: '20px 10px',
    },
    tablePetitions: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    },
    cardsPetitions: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '20px'
    },
    //cardForm
    containerForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        height: '400px',
        padding: '10px',
        border: '1px solid gray',
        borderRadius: '10px'

    },
    inputTitleContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    inputTitle: {
        backgroundColor: '#c6f4f9',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        padding: '10px'
    },
    textarea: {
        height: '150px',
        width: '95%',
        border: '#dac8c8 solid 1px',
        padding: '5px',
        fontFamily: 'Poppins',
        marginBottom: '10px',
    },
    optionTable: {
        border: '#dac8c8 solid 1px',
        borderRadius: '10px',
        padding: '10px',
        marginTop: '5px'
    },
    btnForm: {
        float: 'right',
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        padding: '5px'
    },
    //modal
    containerModal: {
        width: '70%',
        height: '70%'
    },

    containerQuestion: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%'
    },
    //modal-column
    containerCircle: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '20px 0'
    },
    circleColumn: {
        color: '#000000 !important',
        width: '25px',
        height: '25px',
        fontWeight: '500',
    },
    asamblyContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    },
    containerAsambly: {
        height: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    columnSelected: {
        width: '25px',
        height: '25px',
        background: '#c6f4f9',
        borderRadius: '50px',
        textAlign: 'center',
        padding: '10px',
        fontSize: '20px !important',
        margin: '40px !important',
    },
    btnMembers: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '300px',
    },
    containerAllMembers: {
        height: '100 %',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default useStyles;