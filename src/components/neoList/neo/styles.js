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

export const NeoBoolean = styled.p`
  color: ${({ bool }) => (bool ? 'red' : 'green')};
`;

export const NeoBtn = styled.button`
  align-self: flex-end;
  cursor: pointer;
  color: ${({ theme }) => theme.light};
  
  :hover{ 
    color: ${({ theme }) => theme.lightOp};
  }
`;

export const NeoTable = styled.table`
  width: 100%;
  overflow-x: auto;
  margin-bottom: 12px;
  caption{ 
    padding: 12px; 
    background: ${({ theme }) => theme.dark}; 
  }

  thead{ 
    text-align: left; 
    background: ${({ theme }) => theme.dark};
  }
  
  tbody tr{
    background: ${({ theme }) => theme.light};
    :nth-of-type(2n){ 
      background: ${({ theme }) => theme.lightOp};
    }
  }

  tr th{ font-weight: 700; }
  tr th, tr td{ padding: 4px; }
`;
