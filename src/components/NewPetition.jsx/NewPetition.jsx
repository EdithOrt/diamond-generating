import React from 'react';
import Menu from '../layout/Menu';
import AppBarHeader from '../layout/AppBarHeader';

function NewPetition() {
    return (
        <div style={{ display: 'flex' }}>
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <AppBarHeader title='Crear solicitudes' />
                <p>Aqui va nueva solicitudes</p>
            </div>
        </div>
    );
}

export default NewPetition;
