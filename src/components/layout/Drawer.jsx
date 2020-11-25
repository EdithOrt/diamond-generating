import React from 'react';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AssignmentIcon from '@material-ui/icons/Assignment';

import Typography from '@material-ui/core/Typography';
import useStyles from '../../Assets/styles';
import logo from '../../Assets/images/logo-menu.png';

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div

            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <img src={logo} alt="logo" className={classes.logoMenu2} />
            <List className={classes.listDrawer}  >
                <div>
                    <ListItem>
                        <Link to='/legal' >
                            <Button className={classes.btnDrawerOpt}>
                                <ListItemIcon>
                                    <AddCircleOutlineIcon className={classes.iconDrawer} />
                                </ListItemIcon>
                                <Typography variant="h6" >
                                    Crear solicitudes
                            </Typography>
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/legal' >
                            <Button className={classes.btnDrawerOpt}>
                                <ListItemIcon>
                                    <AssignmentIcon className={classes.iconDrawer} />
                                </ListItemIcon>
                                <Typography variant="h6" >
                                    Solicitudes
                            </Typography>
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/legal' >
                            <Button className={classes.btnDrawerOpt}>
                                <ListItemIcon>
                                    <CreateOutlinedIcon className={classes.iconDrawer} />
                                </ListItemIcon>
                                <Typography variant="h6" >
                                    Crear firmas
                            </Typography>
                            </Button>
                        </Link>
                    </ListItem>
                </div>
                <div className={classes.divider}></div>
                <ListItem>
                    <Link to='/legal' >
                        <Button className={classes.btnDrawerOpt}>
                            <ListItemIcon>
                                <SettingsOutlinedIcon className={classes.iconDrawer} />
                            </ListItemIcon>
                            <Typography variant="h6" >
                                Configuración
                            </Typography>
                        </Button>
                    </Link>
                </ListItem>
            </List >
        </div >
    );

    return (
        <div >
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div onClick={toggleDrawer(anchor, true)}>
                        <img src={logo} alt="logo" className={classes.logoMenu} />
                    </div>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        classes={{ paper: classes.drawer }}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}