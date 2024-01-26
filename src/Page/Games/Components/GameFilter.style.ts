import styled from "styled-components";

type FilterItemProps = {
  active?: string;
};

export const FilterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border-top: 1px solid #ccc;
`;
export const FilterItem = styled.button<FilterItemProps>`
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border: unset;
  background: none;
  font-weight: ${(props) => (props.active === "true" ? "bold" : "200")};
`;
