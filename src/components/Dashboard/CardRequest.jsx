import { Card, Avatar, IconButton, CardHeader, CardContent, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { LinearProgress } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccessTimeSharpIcon from '@material-ui/icons/AccessTimeSharp';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 306,
        minWidth: 300,
        borderRadius: 0,
        marginRight: '20px'
    },

    avatar: {
        backgroundColor: red[500],
    },
    bar: {
        height: 7,
        marginBottom: 10,
        borderRadius: 5
    },
    box:{
        height:'110px'
    },
    box1: {
        marginTop: 20
    },
    box2: {
        display: 'flex',
        backgroundColor: 'rgba(241, 230, 125, 0.35)', //amarillo claro #F1E67D
        width: '108px',
        borderRadius: '100px',
        justifyContent: 'center'
    },
    typographyTime: {
        marginTop: 3,
        marginLeft: 4,
        fontSize: '14px',
        color: '#FFE602', //amarillo
        opacity: '1',
    },
    typographyPercentage: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    typographyTitle: {
        color: '#393939', //gris oscuro
        fontSize: '20px'

    },
    typographyDescription: {
        color: '#393939',
        fontSize: '14px'
    },
    timeIcon: {
        width: '16px',
        color: '#FFE602'
    }
}))

const Request = ({ info }) => {

    const classes = useStyles();



    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        P
                </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                subheader={info.creationDate}
            />
            <CardContent>
                <Box className={classes.box}>
                    <Typography variant="body1" className={classes.typographyTitle} component="p">
                        {info.title}
                    </Typography>
                    <Typography variant="body2" className={classes.typographyDescription} component="p">
                        {info.description}
                    </Typography>
                </Box>
                <Box className={classes.box1}>
                    <Typography className={classes.typographyPercentage} variant="caption">
                        75%
                    </Typography>
                    <LinearProgress variant="determinate" value={75} className={classes.bar} />
                </Box>
                <Box className={classes.box2}>
                    <AccessTimeSharpIcon className={classes.timeIcon} />
                    <Typography className={classes.typographyTime} variant="caption">
                        4 días
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Request;