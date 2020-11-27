import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import useStyles from '../../Assets/styles';
import ModalTable from './ModalTable';
import ModalPrueba from './ModalPrueba';
import {db} from '../../firebase-config'
import ModalTicket from './ModalTicket';

function Form({id, setId}) {
    const classes = useStyles();
    let [data, setData] = useState({
        title: '',
        description: '',
        creationDate:'edith',
        author:'hola',
        section:'tengo',
        status:'sueño',
        expired:':('
    });

    const handleData = () =>{
        db.collection('requests').add({
            title: data.title,
            description: data.description,
            creationDate: data.creationDate,
            author:  data.author,
            section: data.section,
            status: data.status,
            expired: data.expired
        }).then((docRef)=>{
            setId(docRef.id)
            })
        }

    const handleInput = (e) =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    console.log(data)
    return (
        <div className={classes.containerForm}>
            <div className={classes.inputTitleContainer}>
                <form >
                    <div className={classes.inputTitle}>
                        <Typography variant="body2" color="primary">
                            Título de solicitud
                        </Typography>
                        <TextField name='title' onChange={handleInput} id="standard-basic"
                            placeholder='aqui va algo' fullWidth />
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
                    <Button onClick={handleData} variant="contained" color="primary">
                        Si
                    </Button>
                    <Button variant="contained" color="primary">
                        No
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Form;
