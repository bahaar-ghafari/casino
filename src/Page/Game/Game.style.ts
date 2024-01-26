import theme from "Styles/Theme";
import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  & > iframe {
    border: 1px solid ${theme.dark};
  }
`;
