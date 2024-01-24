import React, { useEffect, useState } from "react";
import { getGames } from "Services/gameService";
import GameList from "../Components/GameList";
import { GamesContainer } from "./Games.style";
import GameFilter from "../Components/GameFilter";
import { IGame } from "../@types";

const Games: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  const [games, setGames] = useState<IGame[]>([]);
  const [filteredGames, setFilteredGames] = useState<IGame[]>(games);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesData = await getGames();
        setFilteredGames(gamesData)
        setGames(gamesData);
      } catch (error) {
        // Handle error
      }
    };
    fetchData();
  }, []);

  const handleFilter = (filter: number) => {
    setActiveFilter(filter);
    const filteredData =
    filter === 0
        ? games
        : games.filter((item) => item.categoryIds.includes(activeFilter));
    setFilteredGames(filteredData);
  };
  return (
    <GamesContainer>
      <GameList games={filteredGames} />
      <GameFilter activeFilter={activeFilter} onHandleFilter={handleFilter} />
    </GamesContainer>
  );
};

export default Games;
