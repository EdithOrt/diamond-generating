import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Assets/Theme.js';

import Login from './components/Login/index';
import Dashboard from './components/Dashboard/Dashboard';
import Legal from './components/Legal/LegalView';

import Routes from './components/Routes/index.jsx';


function App() {
  return (
    <ThemeProvider theme={theme}>

      <Router>
        <div>
          <Switch>
            <Route path="/dashboard" render={() => <Dashboard />} />
            <Route path="/legal" render={() => <Legal />} />
            <Route exact path="/" render={() => <Login />} />
          </Switch>
        </div>
      </Router>

          <Routes />

    </ThemeProvider>
  );
}

export default App;
