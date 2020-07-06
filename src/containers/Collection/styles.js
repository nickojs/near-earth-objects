import styled from 'styled-components';
import { Container } from '../../generalStyles';

export const CollectionsContainer = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  max-height: 400px;
  overflow-y: auto;
`;
