import React from 'react';
import { AppBar, Badge, IconButton, Avatar, Typography } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AppBarHeader = () => {
    return ( 
        <AppBar position="static" color="primary">
            <IconButton aria-label="show 4 new mails" color="inherit">
                <Typography variant="h6" noWrap>
                    Solicitudes
                </Typography>
                <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                </Badge>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <ExpandMoreIcon />
            </IconButton>
        </AppBar>
     );
}
 
export default AppBarHeader;