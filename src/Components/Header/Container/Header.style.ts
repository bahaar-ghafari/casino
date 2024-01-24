import theme from "Styles/Theme";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 16px;
  align-items: center;
  color: ${theme.dark};
`;
