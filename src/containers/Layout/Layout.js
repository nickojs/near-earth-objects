import React from 'react';
import styled from 'styled-components';

import Theme from '../../Theme';
import themes from './themes.json';

const Layout = ({ children }) => {
  const Container = styled.div`
    width: 80%; 
    max-width: 1200px; 
    margin: 0 auto;
  `;

  const currentTheme = themes.standard;

  return (
    <Theme theme={currentTheme}>
      <Container>
        {children}
      </Container>
    </Theme>
  );
};

export default Layout;
