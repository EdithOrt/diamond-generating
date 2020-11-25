import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppBarHeader from '../AppBarHeader';
import Login from '../Login';
import SectionRequests from '../SectionRequests'

const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route path='/solicitudes'>
                    <AppBarHeader />
                    <SectionRequests />
                </Route>
                <Route path='/' >
                    <Login />
                </Route>
            </Switch>
        </Router>
     );
}
 
export default Routes;