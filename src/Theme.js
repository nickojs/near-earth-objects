import React from 'react';
import { ThemeProvider } from 'styled-components';

const standard = {
  // to be defined...
  dark: '#151618',
  light: '#3F586C',
  color: '#FFF'
};

const Theme = ({ children }) => (
  <ThemeProvider theme={standard}>{children}</ThemeProvider>
);

export default Theme;
