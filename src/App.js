import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Assets/Theme.js';

import Login from './components/Login/index';
import Dashboard from './components/Dashboard/Dashboard';
import Document from "./components/Settings/Settings";
import Signature from "./components/Signature/Signature.jsx";
import NewPetition from './components/NewPetition/NewPetition';
import NewPetition2 from './components/NewPetition/NewPetition2';
import PreviewDoc from './components/NewPetition/PreviewDoc';
import Settings from './components/Settings/Settings';

function App() {
  const [id, setId] = useState('');
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route path="/dashboard" render={() => <Dashboard />} />
            <Route exact path="/" render={() => <Login />} />
            <Route path="/crear-solicitudes" render={() => <NewPetition />} />
            <Route path="/crear-solicitudes2" render={() => <NewPetition2 id={id} setId={setId} />} />
            <Route path="/crear-firma" render={() => <Signature />} />
            <Route path="/documento" render={() => <Document />} />
            <Route path="/vista-previa" render={() => <PreviewDoc id={id} />} />
            <Route path="/configuracion" render={() => <Settings />} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
