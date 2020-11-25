import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Assets/Theme.js';

import Login from './components/Login/index';
import Dashboard from './components/Dashboard/Dashboard';
import Legal from './components/Legal/LegalView';
import NewPetition from "./components/NewPetition.jsx/NewPetition.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Signature from "./components/Signature/Signature.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route path="/dashboard" render={() => <Dashboard />} />
            <Route path="/legal" render={() => <Legal />} />
            <Route path="/crear-solicitudes" render={() => <NewPetition />} />
            <Route exact path="/" render={() => <Login />} />
            <Route path="/configuracion" render={() => <Settings />} />
            <Route path="/crear-firma" render={() => <Signature />} />

          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
