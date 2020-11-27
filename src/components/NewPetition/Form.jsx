import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import useStyles from '../../Assets/styles';
import ModalTable from './ModalTable';
import Prueba1 from '../ModalesPrueba/Prueba1';

function Form() {
    const classes = useStyles();
    return (
        <div className={classes.containerForm}>
            <div className={classes.inputTitleContainer}>
                <div className={classes.inputTitle}>
                    <Typography variant="body2" color="primary">
                        Título de solicitud
                    </Typography>
                    <TextField id="standard-basic"
                        placeholder='aqui va algo' fullWidth />
                </div>
                <textarea placeholder="Describe tu solicitud" className={classes.textarea} />
            </div>
            <div className={classes.optionTable}>
                <Typography variant="body2" color="primary">
                    ¿La solicitud se encuentra dentro de nuestra
                    tabla de asambleas?
                </Typography>
                <ModalTable />
                <div className={classes.btnForm}>
                    <Prueba1 />
                    <Button variant="contained" color="primary">
                        No
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Form;
