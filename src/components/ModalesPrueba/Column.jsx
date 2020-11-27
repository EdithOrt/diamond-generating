import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography } from '@material-ui/core';
import useStyles from '../../Assets/styles';

function Column() {
    const classes = useStyles();

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <Typography variant="h5" color="primary">
                ¿A que columna pertenece su solicitud?
            </Typography>
            <div className={classes.containerCircle} >
                <FormControlLabel color='primary' value="A" control={<Radio />} label="A" classes={{ label: classes.circleColumn }} />
                <FormControlLabel color='primary' value="B" control={<Radio />} label="B" classes={{ label: classes.circleColumn }} />
                <FormControlLabel color='primary' value="C" control={<Radio />} label="C" classes={{ label: classes.circleColumn }} />
                <FormControlLabel color='primary' value="D" control={<Radio />} label="D" classes={{ label: classes.circleColumn }} />
                <FormControlLabel color='primary' value="E" control={<Radio />} label="E" classes={{ label: classes.circleColumn }} />
            </div>
        </div>
    );
}

export default Column;