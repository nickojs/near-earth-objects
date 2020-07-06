import styled from 'styled-components';

export const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  padding: 12px;

  @media(max-width: 500px){ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  input { margin-top: 6px; }

  @media(max-width: 500px){ 
    margin-bottom: 12px;
  }
`;
