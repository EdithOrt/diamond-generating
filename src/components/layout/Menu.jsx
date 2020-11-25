import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';
import Navbar from './Navbar';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import useStyles from '../../Assets/styles';

function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.menu}>
            <div className={classes.appbar}>
                <Drawer />
                <div className={classes.optMenu}>
                    <Link to='/Legal' className={classes.link}>
                        <AddCircleOutlineIcon className={classes.iconDrawer2} />
                    </Link>
                    <Link to='/other' className={classes.link}>
                        <AssignmentIcon className={classes.iconDrawer2} />
                    </Link>
                    <Link to='/other' className={classes.link}>
                        <CreateOutlinedIcon className={classes.iconDrawer2} />
                    </Link>
                </div>
            </div>
            {/*             <div>
                <Navbar />
            </div> */}
        </div>

    );
}

export default Dashboard;
