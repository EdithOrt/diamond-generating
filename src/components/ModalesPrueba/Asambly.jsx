import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../../Assets/styles';

function Asamby() {
    const classes = useStyles();

    return (
        <div className={classes.asamblyContainer}>
            <Typography variant="h5" color="primary">
                Se debe publicar una convocatoria para tu solicitud
            </Typography>
            <Typography variant="body2" color="primary" className={classes.columnSelected}>
                B
            </Typography>
        </div>
    );
}

export default Asamby;