import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Paper, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
        width: 232,
        display: 'flex',
        padding: '2px 4px',
        alignItems: 'center',
        borderRadius: '33px',
        width: '232px',
        height: '40px',
        backgroundColor: '#E8E8E8',
        boxShadow: 'none'
    },
}))

const Browser = () => {

    const classes = useStyles();

    return ( 
        <Paper component="form" className={classes.paper}>
            <IconButton className={classes.iconButton} type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Buscador"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Paper>
     );
}
 
export default Browser;