import React, { useState } from 'react';
import * as S from './styles';
import ThemeSelector from '../themeSelector/themeSelector';

const Navbar = () => {
  const [themes, setThemes] = useState(false);

  const themesHandler = () => setThemes(!themes);

  return (
    <>
      <header>
        <nav>
          <S.Navbar>
            <li>
              <S.Link to="/">Home</S.Link>
            </li>
            <li>
              <S.Link to="/collection">My Collection</S.Link>
            </li>
            <li onClick={themesHandler}>Themes</li>
          </S.Navbar>
        </nav>
      </header>
      <ThemeSelector show={themes} clicked={themesHandler} />
    </>
  );
};

export default Navbar;
