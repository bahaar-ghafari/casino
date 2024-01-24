import React, { useEffect, useState } from "react";
import { FilterItem, FilterItems } from "./GameFilter.style";
import { ICategories } from "../@types";
import { getCategories } from "Services/gameService";

type GameFilterProps = {
  activeFilter: number;
  onHandleFilter: (filter: number) => void;
};
const GameFilter: React.FC<GameFilterProps> = ({
  activeFilter,
  onHandleFilter,
}) => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        // Handle error
      }
    };
    fetchData();
  }, []);
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
