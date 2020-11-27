import React from 'react';
import { Typography, Button } from '@material-ui/core';
import useStyles from '../../Assets/styles';
import tableRemember from '../../Assets/images/tableRemember.png';

function Remember() {
    const classes = useStyles();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h5" color="primary">
                Recuerda
            </Typography>
            <img src={tableRemember} alt="paper" style={{ width:'720px' ,margin: '20px' }} />
        </div>
    );
}

export default Remember;