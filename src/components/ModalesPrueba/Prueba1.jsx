import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Typography } from '@material-ui/core';
import Column from './Column';
import useStyles from '../../Assets/styles';
import AllMembers from './AllMembers';
import Asambly from './Asambly';
import Remember from './Remember';
import Stepper from '../NewPetition/Stepper';
import ModalTicket from '../NewPetition/ModalTicket';
import { db } from '../../firebase-config';

export default function AlertDialog({ id, setId, data, setData }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);
    const [fifth, setFifth] = useState(false);
    const [sixth, setSixth] = useState(false);

    //abre modal-cerrar modal
    const handleClickOpen = () => {
        setOpen(true);
        setFirst(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleFirstChange = () => {
        setFirst(false);
        setSecond(true);
    };

    const handleSecondChange = () => {
        setSecond(false);
        setThird(true);
    };
    const handleThirdChange = () => {
        setThird(false);
        setFourth(true);
    };
    const handleFourthChange = () => {
        setFourth(false);
        setFifth(true);
    };
    const handleFifthChange = () => {
        setFifth(false);
        setSixth(true);
    };
    const handleData = () => {
        db.collection('requests').add({
            title: data.title,
            description: data.description,
            creationDate: data.creationDate,
            author: data.author,
            section: data.section,
            status: data.status,
            expired: data.expired
        }).then((docRef) => {
            setId(docRef.id);
        });
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Si
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                classes={{ paper: classes.containerModal }}
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ height: '100%', marginBottom: '0', display: 'flex' }}>
                        {
                            first ?
                                <div className={classes.containerQuestion}>
                                    <Column />
                                    <Button variant="contained" color="primary" onClick={handleFirstChange}>
                                        Aceptar
                                    </Button>
                                </div>
                                :
                                null
                        }
                        {
                            second ?
                                <div className={classes.containerAllMembers}>
                                    <AllMembers />
                                    <div className={classes.btnMembers} >
                                        <Button variant="contained" color="primary" onClick={handleSecondChange}>
                                            No
                                        </Button>
                                        <Button variant="contained" color="primary" onClick={handleSecondChange}>
                                            Si
                                        </Button>
                                    </div>
                                </div>
                                :
                                null
                        }
                        {
                            third ?
                                <div className={classes.containerAsambly}>
                                    <Asambly />
                                    <Button variant="contained" color="primary" onClick={handleThirdChange}>
                                        enviar
                                    </Button>
                                </div>
                                :
                                null
                        }
                        {
                            fourth ?
                                <div>
                                    <Stepper />
                                    <Button variant="contained" color="primary" onClick={handleFourthChange}>
                                        enviar
                                    </Button>
                                </div>
                                :
                                null
                        }
                        {
                            fifth ?
                                <div
                                    style={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-evenly',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Remember />
                                    <Button variant="contained" color="primary" onClick={handleFifthChange}>
                                        Siguiente
                                    </Button>
                                </div>
                                :
                                null
                        }
                        {
                            sixth ?
                                <div
                                    style={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-evenly',
                                        alignItems: 'center',
                                    }}
                                >
                                    <ModalTicket />

                                    <Link to='/vista-previa'>
                                        <Button variant="contained" color="primary" onClick={handleData}>
                                            Enviar
                                    </Button>
                                    </Link>
                                </div>
                                :
                                null
                        }
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </div>
    );
}

