import React from 'react';
import * as S from './styles';

const Navbar = (props) => (
  <header>
    <nav>
      <S.Navbar>
        <li>
          <S.Link to="/">Home</S.Link>
        </li>
        <li>
          <S.Link to="/collections">My Collections</S.Link>
        </li>
        <li>Themes</li>
      </S.Navbar>
    </nav>
  </header>
);

export default Navbar;
