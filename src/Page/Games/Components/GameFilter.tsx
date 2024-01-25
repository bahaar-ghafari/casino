import React from "react";
import { FilterItem, FilterItems } from "./GameFilter.style";
import { ICategories } from "../@types";
import { getCategories } from "Services/gameService";
import useSWR from "swr";

type GameFilterProps = {
  activeFilter: number;
  onHandleFilter: (filter: number) => void;
};
const GameFilter: React.FC<GameFilterProps> = ({
  activeFilter,
  onHandleFilter,
}) => {
  const { data: categories } = useSWR<ICategories[]>("games", getCategories);

  return (
    <div>
      <div role="heading" aria-level={5}>
        Categories
      </div>
      <FilterItems>
        {categories?.map(({ id, name }) => (
          <FilterItem
            key={id}
            active={[0, id].includes(activeFilter) ? "true" : "false"}
            onClick={() => onHandleFilter(id)}
          >
            {name}
          </FilterItem>
        ))}
      </FilterItems>
    </div>
  );
};

export default GameFilter;
