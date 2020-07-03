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
  font-weight: 700;
  font-family: inherit;

  cursor: pointer;
  transition: .5s ease;
  
  border: 2px solid ${({ theme }) => theme.light};
  box-shadow: 0 0 8px ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.color};

  :hover{ 
    background: white;
    color: ${({ theme }) => theme.invertedColor};
  }

  :active{ transform: translateX(-5px); }
`;
