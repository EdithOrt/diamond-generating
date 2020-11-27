import React from 'react';
import Menu from '../layout/Menu';
import AppBarHeader from '../layout/AppBarHeader';

function Document() {
    return (
        <div style={{ display: 'flex' }}>
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <AppBarHeader title='Previsualizador de formato ' />
                <div>
                    CREACION DE FIRMAS
                </div>
            </div>
        </div>
    );
}

export default Document;
