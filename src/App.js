import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Assets/Theme.js';

import Login from './components/Login/index';
import Dashboard from './components/Dashboard/Dashboard';
import Legal from './components/Legal/LegalView';
import Settings from "./components/Settings/Settings.jsx";
import Signature from "./components/Signature/Signature.jsx";
import NewPetition from './components/NewPetition/NewPetition';
import NewPetition2 from './components/NewPetition/NewPetition2';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route path="/dashboard" render={() => <Dashboard />} />
            <Route path="/legal" render={() => <Legal />} />
            <Route exact path="/" render={() => <Login />} />
            <Route path="/configuracion" render={() => <Settings />} />
            <Route path="/crear-solicitudes" render={() => <NewPetition />} />
            <Route path="/crear-solicitudes2" render={() => <NewPetition2 />} />
            <Route path="/crear-firma" render={() => <Signature />} />

          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
