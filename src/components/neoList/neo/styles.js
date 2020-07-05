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

export const NeoSmallTitle = styled.p`
  padding: 4px 0;
  margin-top: 8px;
  font-weight: 700;
`;

export const NeoSmallText = styled.p`
  padding: 4px 0;
`;

export const DetailsContainer = styled.div`
  text-align: center;
`;

export const CloseApproaches = styled(DetailsContainer)`
  margin-top: 12px;
`;

export const CloseApproachList = styled.ul`
  max-height: 200px; 
  overflow-y: auto;
  
  li{
    text-align: left;
    margin: 6px; padding: 6px;
    border: 1px solid white;

    :hover{
      background: ${({ theme }) => theme.dark};
    }
  }
`;
