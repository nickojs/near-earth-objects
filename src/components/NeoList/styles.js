import styled from 'styled-components';
import { Container } from '../../generalStyles';

export const NeoContainer = styled(Container)`
  width: 35%;
  padding: 20px;
  margin: 12px;
`;

export const NeoListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  
  max-height: 600px;
  padding: 12px;
  overflow-y: auto;
`;
