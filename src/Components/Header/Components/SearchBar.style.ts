import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  & > svg {
    margin-right: 1em;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  padding: 8px;
  border-radius: 100%;
  outline: none;
  flex-grow: 1;
`;
