import React from 'react';
import themes from '../../containers/Layout/themes.json';
import * as S from './styles';

const ThemeSelector = ({ show, clicked }) => {
  const themeKeys = Object.keys(themes);

  return (
    <S.ThemeContainer show={show} onClick={clicked}>
      <S.ThemeList>
        {themeKeys.map((theme) => (
          <S.ThemeOption key={theme}>
            <p>{theme}</p>
            <S.PreviewContainer>
              <S.PreviewColor color={themes[theme].light} />
              <S.PreviewColor color={themes[theme].dark} />
            </S.PreviewContainer>
          </S.ThemeOption>
        ))}
      </S.ThemeList>
    </S.ThemeContainer>
  );
};

export default ThemeSelector;
