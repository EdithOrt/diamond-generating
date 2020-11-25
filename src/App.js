import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Assets/Theme.js';
import Login from './components/Login'
import Routes from './components/Routes/index.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
          <Routes />
    </ThemeProvider>
  );
}

export default App;