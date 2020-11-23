import React from 'react';
import { Button } from '@material-ui/core'
import Login from './components/Login'

function App() {
    return (
      <div className="App">
          <p>Inicializando proyecto diamond generating</p>
          <Button variant="contained" color="primary">Hey botón de material UI</Button>
          <p>También ya está instalado react-router-dom y material ui icons</p>
          <Login />
      </div>
    );
  }
  
  export default App;