import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase-config';
import useStyles from '../../Assets/styles';
import { Button, Checkbox, FormControlLabel, Grid, Input, Typography } from '@material-ui/core';
import loginImage from '../../Assets/images/login.png';
import logo from '../../Assets/images/logo.png';

import ModalPassword from './ModalPassword';


const Login = () => {

    const classes = useStyles();

    let [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const resetLogin = () => {
        setData({
            email: '',
            password: ''
        });
    };

    const authFirebase = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(data.email, data.password)
            .then(() => {
                console.log('has ingresado :)');
                console.log(auth.currentUser);
                resetLogin();
            })
            .catch(function (e) {
                let errorCode = e.code;
                let errorMessage = e.message;
                console.log(errorMessage);
            });
    };

    const signOut = () => {
        auth.signOut()
            .then(() => {
                console.log("has cerrado sesión");
                console.log(auth.currentUser);
            })
            .catch((e) => {
                console.log(e.message);
            });
    };

    return (
        <Grid container style={{ height: '100vh' }}>
            <Grid container item sm={7} style={{ height: '100vh' }} justify='center'>
                <img src={loginImage} alt="login" className={classes.imgLogin} />
            </Grid>
            <Grid container item sm={5} className={classes.loginContainer} direction="column" justify="center" alignItems="center" >
                <img src={logo} alt="login" className={classes.imgLogo} />
                <Typography variant='body1'>Ingresa tu cuenta</Typography>
                <form>
                    <div className={classes.inputContainer}>
                        <Typography variant="body2" color="initial">
                            Usuario
                        </Typography>
                        <Input placeholder='ejemplo@dgcm.com' disableUnderline className={classes.inputLogin} />
                    </div>
                    <div className={classes.inputContainer}>
                        <Typography variant="body2" color="initial">
                            Contraseña
                        </Typography>
                        <Input type='password' placeholder='******' disableUnderline className={classes.inputLogin} />
                    </div>
                </form>
                <Button variant="contained" color='secondary'>
                    <Link to='/dashboard'>
                        Ingresar
                    </Link>
                </Button>
                <div className={classes.remeberOpt}>
                    <FormControlLabel
                        value="end"
                        control={<Checkbox color="secondary" />}
                        label="Recordarme"
                        labelPlacement="end"
                        style={{ transform: 'scale(0.75)' }}
                    />
                    <ModalPassword />
                </div>
            </Grid>
        </Grid>

    );
};

export default Login; 