import React from 'react';
import styled from 'styled-components';

import Theme from '../../Theme';

const Layout = ({ children }) => {
  const Container = styled.div`
    width: 80%; 
    max-width: 1200px; 
    margin: 0 auto;
  `;

  // themes (will belong to its own file later on)
  const standard = {
    dark: '#151618',
    light: '#3F586C',
    color: '#FFF'
  };

  return (
    <Theme theme={standard}>
      <Container>
        {children}
      </Container>
    </Theme>
  );
};

export default Layout;
