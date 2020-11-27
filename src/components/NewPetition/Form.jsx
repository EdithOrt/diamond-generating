import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import useStyles from '../../Assets/styles';
import ModalTable from './ModalTable';

import Prueba1 from '../ModalesPrueba/Prueba1';

import { db } from '../../firebase-config';

function Form({ id, setId, data, setData }) {
    const classes = useStyles();



    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    console.log(data);
    return (
        <div className={classes.containerForm}>
            <div className={classes.inputTitleContainer}>
                <form >
                    <div className={classes.inputTitle}>
                        <Typography variant="body2" color="primary">
                            Título de la solicitud
                        </Typography>
                        <TextField name='title' onChange={handleInput} id="standard-basic" fullWidth style={{color:'black !important'}} />
                    </div>
                    <textarea name='description' onChange={handleInput} placeholder="Describe tu solicitud" className={classes.textarea} />
                </form>
            </div>
            <div className={classes.optionTable}>
                <Typography variant="body2" color="primary">
                    ¿La solicitud se encuentra dentro de nuestra
                    tabla de asambleas?
                </Typography>
                <ModalTable />
                <div className={classes.btnForm}>
                    <Prueba1 data={data} setData={setData} setId={setId} />
                    <Button variant="contained" color="primary">
                        No
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Form;
