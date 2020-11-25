import React from 'react';
import Menu from '../layout/Menu';
import Table from './Table';
import AppBarHeader from '../layout/AppBarHeader';
import Browser from '../Dashboard/Browser';
import useStyles from '../../Assets/styles';

function LegalView() {
    const classes = useStyles();

    return (
        <div style={{ display: 'flex' }}>
            <Menu />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <AppBarHeader title='legal' />
                <div className={classes.browserLegal}>
                    <Browser />
                </div>
                <div className={classes.tableContainer}>
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default LegalView;
