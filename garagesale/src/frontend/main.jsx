import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const container = document.getElementById('root'); // Get the root container
const root = createRoot(container); // Create a root

// Use the root.render method to render your app
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
