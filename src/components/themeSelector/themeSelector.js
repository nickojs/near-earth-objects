import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';

const ThemeSelector = ({ show, clicked }) => {
  const { all } = useSelector((state) => state.theme);
  const themeKeys = Object.keys(all);

  return (
    <S.ThemeContainer show={show} onClick={clicked}>
      <S.ThemeList>
        {themeKeys.map((each) => (
          <S.ThemeOption key={each}>
            <p>{each}</p>
            <S.PreviewContainer>
              <S.PreviewColor color={all[each].light} />
              <S.PreviewColor color={all[each].dark} />
            </S.PreviewContainer>
          </S.ThemeOption>
        ))}
      </S.ThemeList>
    </S.ThemeContainer>
  );
};

export default ThemeSelector;
