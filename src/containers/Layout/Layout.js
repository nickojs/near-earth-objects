import React from 'react';
import themes from './themes.json';

import * as S from './styles';
import Theme from '../../Theme';
import Navbar from '../../components/navbar/navbar';

const Layout = ({ children }) => {
  const currentTheme = themes.standard;

  return (
    <Theme theme={currentTheme}>
      <Navbar />
      <S.Container>
        <S.Title>Near Earth Objects Analyzer</S.Title>
        {children}
      </S.Container>
    </Theme>
  );
};

export default Layout;
