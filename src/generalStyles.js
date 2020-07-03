import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.dark};
`;

export const Title = styled.div`
  display: block;
  width: 100%;
  min-width: 100%;
  padding: 12px;

  background: ${({ theme }) => theme.light};
`;

export const Button = styled.button`
  padding: 6px 24px;
  border: 2px solid lightblue;
  box-shadow: 0 0 10px lightblue;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: .5s ease;

  :hover{ 
    background: white;
    color: lightblue;
  }

  :active{ 
    transform: translateX(-5px);
  }
`;
