import React from 'react';
import Request from './Request'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Browser from '../Browser';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 40
    },
    grid: {
        marginTop: 20
    }
})) 

const SectionRequests = () => {

    const classes = useStyles();

    return ( 
        <Container fixed className={classes.root}>
            <Browser />
            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={4} spacing={2}>
                    <Request />
                </Grid>
                <Grid item xs={4} spacing={2}>
                    <Request />
                </Grid>
                <Grid item xs={4} spacing={2}>
                    <Request />
                </Grid>
                <Grid item xs={4} spacing={2}>
                    <Request />
                </Grid>
                <Grid item xs={4} spacing={2}>
                    <Request />
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default SectionRequests;