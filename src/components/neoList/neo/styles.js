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

export const DetailsContainer = styled.div`
  text-align: center;
`;

export const NeoSmallTitle = styled.p`
  padding: 4px;
  margin-top: 8px;
  font-weight: 700;
`;

export const NeoSmallText = styled.p`
  padding: 4px;
`;

export const NeoTable = styled.table`
  width: 100%;
  overflow-x: auto;
  margin-bottom: 12px;
  text-align: left; 

  tbody tr {
    td{ 
      padding: 12px 4px;
      :last-child { text-align: right; }
    }
    :hover{ 
      background: ${({ theme }) => theme.dark}
    }
  }

`;
