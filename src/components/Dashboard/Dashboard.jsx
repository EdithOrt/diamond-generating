import React from 'react';
import RequestSection from './RequestSection';
import AppBarHeader from '../layout/AppBarHeader';
import Menu from '../layout/Menu';
import Prueba1 from '../ModalesPrueba/Prueba1';

function Dashboard() {
    return (
        <div style={{ display: 'flex' }}>
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <AppBarHeader title='Solicitudes' />
                <RequestSection />
            </div>
        </div>
    );
}

export default Dashboard;
