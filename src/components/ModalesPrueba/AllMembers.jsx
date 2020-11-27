import React from 'react';
import { Typography, Button } from '@material-ui/core';
import useStyles from '../../Assets/styles';
import paper from '../../Assets/images/paper.png';

function AllMembers() {
    const classes = useStyles();

    return (
        <div style={{
            textAlign: 'center'
        }}>
            < Typography variant="h5" color="primary" >
                ¿Cuenta usted con la aprobación unánime de
                la totalidad de Accionistas ?
            </Typography >
            <img src={paper} alt="paper" style={{ margin: '40px' }} />
        </div >
    );
}

export default AllMembers;