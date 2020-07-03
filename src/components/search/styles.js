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

export const SearchButton = styled.button`
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

export const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  padding: 12px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  input { margin-top: 6px; }
`;
