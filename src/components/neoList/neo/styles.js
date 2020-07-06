import styled from 'styled-components';
import { Container } from '../../../generalStyles';

// Neo
export const NeoContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  margin: 12px;

  @media(max-width: 500px){ 
    width: 100%;
  }
  
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
  ${({ toggle }) => (toggle ? 'display: none;' : 'display: block;')}
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
