import styled from 'styled-components';
import { Link as L } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  padding: 12px;
  width: 100%;
  
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.darkOp};
`;

export const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;

  li{
    margin: 6px;
    cursor: pointer;
    
    :nth-of-type(1){ margin-right: auto; }
    :hover{ font-weight: 700; }
    
    * { color: ${({ theme }) => theme.light}; }
  }

  @media(max-width: 500px){  flex-direction: column; }
`;

export const Link = styled(L)`
  text-decoration: none;
`;

export const LinkButton = styled.a`
  text-decoration: none;
`;
