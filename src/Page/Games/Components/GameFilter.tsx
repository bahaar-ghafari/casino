import React, { useState } from "react";
import { FilterItem, FilterItems } from "./GameFilter.style";

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
      <FilterItems>
        <FilterItem
          active={activeFilter === "All" ? "true" : "false"}
          onClick={() => handleFilterClick("All")}
        >
          All
        </FilterItem>
        <FilterItem
          active={
            activeFilter === "VIDEO SLOTS" || activeFilter === "All"
              ? "true"
              : "false"
          }
          onClick={() => handleFilterClick("VIDEO SLOTS")}
        >
          VIDEO SLOTS
        </FilterItem>
        <FilterItem
          active={
            activeFilter === "SLOT MACHINES" || activeFilter === "All"
              ? "true"
              : "false"
          }
          onClick={() => handleFilterClick("SLOT MACHINES")}
        >
          SLOT MACHINES
        </FilterItem>
      </FilterItems>
    </div>
  );
};

export default GameFilter;
