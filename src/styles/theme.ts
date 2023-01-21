'use client';
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  typography: {
    fontFamily: 'Magra, sans-serif'
  },
  palette: {
    primary: {
      main: '#66bb6a'
    },
    secondary: {
      main: '#ffffff'
    },
    text: {
      primary: '#fff',
      secondary: '#ff0000'
    },
    mode: 'dark'
  }
});
