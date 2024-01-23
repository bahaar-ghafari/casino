import styled from "styled-components";

export const GameItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 16px;
  border-top: 1px solid #ccc;
  padding: 1rem 0;

  &.button {
    grid-column: 2;
  }
`;

export const GameItemImgContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
