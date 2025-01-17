import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 28px 0;
  }
`;

export const Bar = styled.div`
  --primary: ${({ theme }) => theme.light};
  --secundary: ${({ theme }) => theme.dark};
  width: 100%; height: 24px; margin: 12px;
  box-shadow: 0 0 10px black;
  background-image: 
    repeating-linear-gradient(
      -45deg,
      var(--primary),
      var(--primary) 11px,
      var(--secundary) 10px,
      var(--secundary) 20px 
    );
  background-size: 28px 28px;
  animation: ${move} .5s linear infinite;
  clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%);
`;
