import styled, { keyframes, css } from 'styled-components';

const anim = keyframes`
  from{
    top: -10%;
    opacity: 0;
  }33%{
    top: 5%;    
    opacity: 1;
  }to{
    top: -10%;
    opacity: 0;
  }
`;

const animCss = css`
  animation: ${anim} 3s;
`;

export const NotificationContainer = styled.div`
  position: absolute;
  left: 50%; top: -10%;
  transform: translate(-50%, 0);

  margin: 12px;
  padding: 12px;
  
  color: white;
  font-weight: bold;
  
  background: lightcoral;
  border: 1px solid red;
  border-radius: 8px;

  ${({ animate }) => animate && animCss};

`;
