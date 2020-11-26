import React from 'react';
import { AppBar, Badge, IconButton, Avatar, Typography, Box, MenuItem } from '@material-ui/core';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import userImage from '../../Assets/images/user-img.png'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        boxShadow: '0px 1px 0px #DADADA'
    },
    typographyHeader: {
        color: '#393939',
        fontSize: '20px',
        marginTop: '15px',
        marginLeft: '38px',
        marginBottom: '18px'
    },
    containerMenu: {
        display: 'flex',
        marginRight: '38px',
        marginTop: '10px'
    },
    expandIcon: {
        color: '#616167 !important',
        marginTop: '6px'
    },
    iconBell: {
        marginRight: '33px',
    },
    userAvatar: {
        width: '40px'
    }
}));

const AppBarHeader = (props) => {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Box>
                <Typography variant="h6" noWrap className={classes.typographyHeader}>
                    {props.title}
                </Typography>
            </Box>
            <Box className={classes.containerMenu}>
                <IconButton aria-label="show 4 new mails" className={classes.iconBell}>
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsNoneOutlinedIcon />
                    </Badge>
                </IconButton>
                <Avatar className={classes.userAvatar} alt="Remy Sharp" src={userImage} />
                <ExpandMoreIcon className={classes.expandIcon} />
            </Box>
        </AppBar>
    );
};

export default AppBarHeader;