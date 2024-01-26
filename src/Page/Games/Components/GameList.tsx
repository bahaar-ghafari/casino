import React, { useEffect } from "react";
import { IGame } from "../@types";
import GameItem from "./GameItem";
import useGamesStore from "stores/gamesStore";
import useSWR from "swr";
import { getGames } from "Services/gameService";
import { apiKeys } from "Constants/apiKeys";

const GameList: React.FC = () => {
  const { filteredGames,setFilteredGames,searchQuery, selectedCategory } = useGamesStore();
  const { data: games } = useSWR<IGame[]>(apiKeys.games, getGames);
  
  useEffect(() => {
    let filtered = games?.filter((game) => {
      return (
        game.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === 0 || game.categoryIds.includes(selectedCategory))
      );
    });
    setFilteredGames(filtered)
  }, [searchQuery, selectedCategory, games, setFilteredGames]);
  return (
    <div>
      <b>
        Games
      </b>
      {filteredGames?.map((game: IGame) => (
        <GameItem key={game.code} {...game} />
      ))}
    </div>
  );
};

export default GameList;
