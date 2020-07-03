import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  // to be defined...
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
