import React, { useState } from "react";
import styled from "styled-components";

interface FilterItemProps {
  active: boolean;
}
const FilterItem = styled.div<FilterItemProps>`
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "thin")};
`;

const GameFilter = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <div role="heading" aria-level={5}>
        Categories
      </div>
      <FilterItem
        active={activeFilter === "All"}
        onClick={() => handleFilterClick("All")}
      >
        All
      </FilterItem>
      <FilterItem
        active={activeFilter === "VIDEO SLOTS" || activeFilter === "All"}
        onClick={() => handleFilterClick("VIDEO SLOTS")}
      >
        VIDEO SLOTS
      </FilterItem>
      <FilterItem
        active={activeFilter === "SLOT MACHINES" || activeFilter === "All"}
        onClick={() => handleFilterClick("SLOT MACHINES")}
      >
        SLOT MACHINES
      </FilterItem>
    </div>
  );
};

export default GameFilter;
