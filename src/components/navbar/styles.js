import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 12px;
  width: 100%;
  
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.darkOp};

  list-style: none;

  li{
    margin: 6px;
    cursor: pointer;
  
    :nth-of-type(1){ margin-right: auto; }
    :hover{ font-weight: 700; }
  }
`;
