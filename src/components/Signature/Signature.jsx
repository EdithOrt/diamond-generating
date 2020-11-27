import React from 'react';
import Menu from '../layout/Menu';
import AppBarHeader from '../layout/AppBarHeader';
import Stepper from '../NewPetition/Stepper'



function Signature() {
    return (
        <div style={{ display: 'flex' }}>
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <AppBarHeader title='Crear firmas' />
                CREAR FIRMAS
                <Stepper />
            </div>
        </div>
    );
}

export default Signature;
