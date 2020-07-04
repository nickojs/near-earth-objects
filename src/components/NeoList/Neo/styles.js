import styled from 'styled-components';
import { Container } from '../../../generalStyles';

// Neo
export const NeoContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
  margin: 12px;
`;

export const NeoSubData = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

export const NeoSubDataInfo = styled.li`
  text-align: center;
`;

export const NeoBtn = styled.button`
  align-self: flex-end;
  cursor: pointer;
  color: ${({ theme }) => theme.light};
  
  :hover{ 
    color: ${({ theme }) => theme.lightOp};
  }
`;
