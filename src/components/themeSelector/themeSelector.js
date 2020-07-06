import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './styles';

const ThemeSelector = ({ show, clicked }) => {
  const { all } = useSelector((state) => state.theme);
  const themeKeys = Object.keys(all);
  const dispatch = useDispatch();

  const changeThemeHandler = (value) => {
    dispatch({ type: 'CHANGE_THEME', value });
  };

  return (
    <S.ThemeContainer show={show} onClick={clicked}>
      <S.ThemeList>
        {themeKeys.map((each) => (
          <S.ThemeOption
            key={each}
            onClick={() => changeThemeHandler(each)}
          >
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
