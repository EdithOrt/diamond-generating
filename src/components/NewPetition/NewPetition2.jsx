import React, { useState } from 'react';
import Menu from '../layout/Menu';
import AppBarHeader from '../layout/AppBarHeader';
import Browser from '../Dashboard/Browser';
import useStyles from '../../Assets/styles';
import { Button } from '@material-ui/core';
import Form from './Form';
function NewPetition() {

    const classes = useStyles();
    const [addPetition, setAddPetition] = useState(false);
    const handleAddPetition = () => {
        setAddPetition(true);
    };
    return (
        <div style={{ display: 'flex' }}>
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <AppBarHeader title='Crear solicitudes' />
                <div className={classes.browserPetition}>
                    <Browser />
                    <Button variant='outlined' color="primary" onClick={handleAddPetition}>
                        + Agregar
                    </Button>
                </div>
                <div style={{
                    display: 'flex', justifyContent: 'space-around',
                    alignItems: 'center',
                    height: '100%'
                }}>
                    <div>
                        <Form />
                    </div>
                    {
                        addPetition ?
                            <Form />
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
}

export default NewPetition;
