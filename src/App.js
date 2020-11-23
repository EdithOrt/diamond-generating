import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Assets/Theme.js';
import Login from './components/Login'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <p>Inicializando proyecto diamond generating</p>
          <Button variant="contained" color="primary">Hey botón de material UI</Button>
          <p>También ya está instalado react-router-dom y material ui icons</p>
          <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;