import React from 'react';
import Menu from '../layout/Menu';
import AppBarHeader from '../layout/AppBarHeader';
function Signature() {
    return (
        <div style={{ display: 'flex' }}>
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <AppBarHeader title='Crear firmas' />
                <p>Aqui crearas firmas</p>
            </div>
        </div>
    );
}

export default Signature;
