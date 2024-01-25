import React, { useState } from "react";
import { getGames } from "Services/gameService";
import GameList from "../Components/GameList";
import { GamesContainer } from "./Games.style";
import GameFilter from "../Components/GameFilter";
import { IGame } from "../@types";
import useSWR from "swr";

const Games: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  const { data: games } = useSWR<IGame[]>("games", getGames);
  const [filteredGames, setFilteredGames] = useState<IGame[]>(games ?? []);

  const handleFilter = (filter: number) => {
    setActiveFilter(filter);
    if (games) {
      if (filter === 0) {
        setFilteredGames(games);
      } else {
        setFilteredGames(
          games?.filter((item) => item.categoryIds.includes(activeFilter))
        );
      }
    }
  };
  return (
    <GamesContainer>
      <GameList games={filteredGames} />
      <GameFilter activeFilter={activeFilter} onHandleFilter={handleFilter} />
    </GamesContainer>
  );
};

export default Games;
