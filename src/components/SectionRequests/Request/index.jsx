import { Card, Avatar, IconButton, CardHeader, CardContent, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import {LinearProgress} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccessTimeSharpIcon from '@material-ui/icons/AccessTimeSharp';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 336,
      borderRadius: 0
    },
    avatar: {
        backgroundColor: red[500],
      },
      bar: {
          height: 7,
          marginBottom:10,
          borderRadius: 5
      },
      box1: {
          marginTop: 20
      }
}))  

const Request = () => {

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
              subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                    Compra de local
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                <Box className={classes.box1}>
                    <Typography variant="caption">
                        75%
                    </Typography>
                    <LinearProgress variant="determinate" value={75} className={classes.bar} />
                </Box>
                <Box color="secondary">
                    <AccessTimeSharpIcon />
                    <Typography variant="caption">
                        5 días
                    </Typography>
                </Box>
            </CardContent>
        </Card>
     );
}
 
export default Request;