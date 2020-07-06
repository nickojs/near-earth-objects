import styled from 'styled-components';

export const ThemeContainer = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 100vh;
  z-index: 2;
  ${({ show }) => (show ? 'display: block;' : 'display: none;')}
`;

export const ThemeList = styled.ul`
  width: 40%;
  max-width: 200px;
  min-width: 200px;
  height: 100%;

  box-shadow: 0 0 0 4000px rgba(0, 0, 0, .6);

  color: ${({ theme }) => theme.color};
  background: rgba(0, 0, 0, .9);
`;

export const ThemeOption = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin: 0 auto;
  padding: 12px;
  cursor: pointer;

  :hover{ 
    color: gold;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  width: 100px;

`;

export const PreviewColor = styled.div`
  width: 20px; height: 20px; margin: 0 2px;
  background: ${({ color }) => color};
`;
