import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Assets/Theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button variant="contained" color="primary">Hey botón de material UI</Button>
        <Button variant="contained" color="secondary">Hey botón de material UI</Button>

        <Typography variant="h1" color="textSecondary">titulo</Typography>
        <Typography variant="h1" color="textPrimary">titulo</Typography>
        <Typography variant="h1" color="textOther">QUE ES ESTO</Typography>
        <Typography variant="h1" color="primary">titulo</Typography>

        <p>hola</p>
      </div>
    </ThemeProvider>
  );
}

export default App;