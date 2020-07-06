import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styles';
import { ExternalTitle } from '../../generalStyles';
import Theme from '../../Theme';
import Navbar from '../../components/navbar/navbar';

const Layout = ({ children }) => {
  const { all, currentTheme } = useSelector((state) => state.theme);

  return (
    <Theme theme={all[currentTheme]}>
      <Navbar />
      <S.Container>
        <ExternalTitle>Near Earth Objects Analyzer</ExternalTitle>
        {children}
      </S.Container>
    </Theme>
  );
};

export default Layout;
