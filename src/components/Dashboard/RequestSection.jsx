import React, { useState } from 'react';
import CardRequest from './CardRequest.jsx';
import Table from './Table';
import { Button, Container, Grid } from '@material-ui/core';
import Browser from './Browser';
import useStyles from '../../Assets/styles';
import useData from '../../Assets/useData'

const SectionRequests = () => {

    const classes = useStyles();
    const data = useData();

    const [allPetitions, setAllPetitions] = useState(false);

    const handleChangeView = () => {
        setAllPetitions(!allPetitions);
    };

    return (
        <Container>
            <div className={classes.browserPetition}>
                <Browser />
                <Button variant="text" color="default" onClick={handleChangeView}>
                    {
                        allPetitions ? 'recientes' : 'ver todos'
                    }
                </Button>
            </div>
            <Grid container spacing={3} className={classes.grid}>
                {
                    allPetitions ?
                        <div className={classes.tablePetitions}>
                            <Table />
                        </div>
                        :
                        <div className={classes.cardsPetitions}>
                            {data.map((info) => (
                                <CardRequest
                                info = {info}
                                />
                            ))}
                        </div>
                }
            </Grid>
        </Container>
    );
};

export default SectionRequests;