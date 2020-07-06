import styled, { css } from 'styled-components';
import { Container as C } from '../../../generalStyles';

const danger = css`
  text-shadow: 0 0 1px red;
  border: 1px solid lightcoral;

  color: red;
  background: lightcoral;
`;

export const Container = styled(C)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  width: 50%; 
  padding: 12px; 
  margin: 12px auto;
  
  ${({ type }) => (type === 'danger' ? danger : null)}
`;
