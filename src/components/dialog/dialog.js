import React from 'react';
import * as S from './styles';

const Dialog = ({ children, type }) => (
  <S.Container type={type}>
    {children}
  </S.Container>
);

export default Dialog;
