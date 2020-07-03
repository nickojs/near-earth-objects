import React from 'react';
import themes from './themes.json';

import * as S from './styles';
import Theme from '../../Theme';

const Layout = ({ children }) => {
  const currentTheme = themes.standard;

  return (
    <Theme theme={currentTheme}>
      <S.Container>
        {children}
      </S.Container>
    </Theme>
  );
};

export default Layout;
