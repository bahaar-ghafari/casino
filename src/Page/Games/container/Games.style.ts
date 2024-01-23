import styled from "styled-components";

// Styled components
const GamesContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 16px;
`;

const GamelistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top:1px solid #ccc;
`;

const GamesFilterContainer = styled.div`
  display: flex;
  flex-direction:column;
  border-top:1px solid #ccc;
`;

export { GamesContainer, GamelistContainer, GamesFilterContainer };
