import styled, { css } from 'styled-components';

const disabled = css`
  border: 0;
  box-shadow: 0;

  color: grey;
  background: 
    linear-gradient(45deg, 
      #eddc5f 25%, #000000 25%, 
      #000000 50%, #eddc5f 50%, 
      #eddc5f 75%, #000000 75%, 
      #000000 100%);
  background-size: 56.57px 56.57px;
`;

export const Container = styled.div`
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.darkOp};

  border: 1px solid ${({ theme }) => theme.light};
  box-shadow: 0 0 10px ${({ theme }) => theme.light};

  max-width: 900px;
  margin: 0 auto;
`;

export const TogglableContainer = styled.div`
  ${({ toggle }) => (toggle ? 'display: none;' : 'display: block;')}
`;

export const Title = styled.div`
  display: block;
  width: 100%;
  min-width: 100%;
  padding: 12px;

  background: ${({ theme }) => theme.lightOp};
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
  background: ${({ theme }) => theme.dark};

  :hover{ 
    background: white;
    color: ${({ theme }) => theme.invertedColor};
  }

  :active{ transform: translateX(-5px); }
  :disabled{ ${disabled}; }
`;
