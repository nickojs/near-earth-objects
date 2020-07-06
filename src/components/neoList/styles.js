import styled from 'styled-components';

// NeoList
export const NeoListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  
  max-height: 600px;
  padding: 12px;
  overflow-y: auto;

  @media(max-width: 500px){ 
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;
