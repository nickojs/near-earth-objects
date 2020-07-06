import React from 'react';
import themes from './themes.json';

import * as S from './styles';
import Theme from '../../Theme';
import Navbar from '../../components/navbar/navbar';
import { ExternalTitle } from '../../generalStyles';

const Layout = ({ children }) => {
  const currentTheme = themes.standard;

  return (
    <Theme theme={currentTheme}>
      <Navbar />
      <S.Container>
        <ExternalTitle>Near Earth Objects Analyzer</ExternalTitle>
        {children}
      </S.Container>
    </Theme>
  );
};

export default Layout;
