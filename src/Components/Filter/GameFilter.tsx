import React from "react";
import { FilterItem, FilterItems } from "./GameFilter.style";
import { ICategories, IGame } from "../../Page/Games/@types";
import { getCategories, getGames } from "Services/gameService";
import useSWR from "swr";
import useGamesStore from "stores/gamesStore";
import { apiKeys } from "Constants/apiKeys";

const GameFilter: React.FC = () => {
  const { data: games } = useSWR<IGame[]>(apiKeys.games, getGames);
  const { data: categories } = useSWR<ICategories[]>(apiKeys.categories, getCategories);
  const { selectedCategory,setFilteredGames, setSelectedCategory } = useGamesStore();

  
  const handleFilter = (filter: number) => {
    setSelectedCategory(filter);
    if (games) {
      if (filter === 0) {
        setFilteredGames(games);
      } else {
        setFilteredGames(
          games?.filter((item) => item.categoryIds.includes(selectedCategory))
        );
      }
    }
  };
  return (
    <div>
      <b>
        Categories
      </b>
      <FilterItems>
        {categories?.map(({ id, name }) => (
          <FilterItem
            key={id}
            active={[0, id].includes(selectedCategory) ? "true" : "false"}
            onClick={() => handleFilter(id)}
          >
            {name}
          </FilterItem>
        ))}
      </FilterItems>
    </div>
  );
};

export default GameFilter;
