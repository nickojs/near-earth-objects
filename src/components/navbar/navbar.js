import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { TogglableContainer, InlineButton } from '../../generalStyles';
import ThemeSelector from '../themeSelector/themeSelector';

const Navbar = () => {
  const [themes, setThemes] = useState(false);
  const [expand, setExpand] = useState(false);
  const [size, setSize] = useState(null);

  const themesHandler = () => setThemes(!themes);
  const expandHandler = () => setExpand(!expand);

  useEffect(() => {
    setSize(window.innerWidth);
    if (window.innerWidth > 500) setExpand(true);
  }, []);

  return (
    <>
      <header>
        <S.NavbarContainer>
          {size < 500
          && (
            <InlineButton type="button" onClick={expandHandler}>
              {expand ? 'Close' : 'Open'} menu
            </InlineButton>
          )}

          <TogglableContainer toggle={expand}>
            <S.Navbar>
              <li>
                <S.Link to="/">Home</S.Link>
              </li>
              <li>
                <S.Link to="/collection">My Collection</S.Link>
              </li>
              <li>
                <S.LinkButton onClick={themesHandler}>Themes</S.LinkButton>
              </li>
            </S.Navbar>
          </TogglableContainer>
        </S.NavbarContainer>
      </header>
      <ThemeSelector show={themes} clicked={themesHandler} />
    </>
  );
};

export default Navbar;
