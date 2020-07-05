import React from 'react';
import * as S from './styles';

const Navbar = (props) => (
  <header>
    <nav>
      <S.Navbar>
        <li>Home</li>
        <li>My Collection</li>
        <li>Themes</li>
      </S.Navbar>
    </nav>
  </header>
);

export default Navbar;
