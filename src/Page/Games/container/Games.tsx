import React, { useEffect, useState } from "react";
import { getGames } from "Services/gameService";
import GameList from "../Components/GameList";
import {
  GamesContainer,
  GamelistContainer,
  GamesFilterContainer,
} from "./Games.style";
import GameFilter from "../Components/GameFilter";
import { IGame } from "../@types";

const Games: React.FC = () => {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getGames();
        setGames(gamesData);
      } catch (error) {
        // Handle error
      }
    };

    fetchGames();
  }, []);
  return (
    <GamesContainer>
      <GamelistContainer>
        <GameList games={games} />
      </GamelistContainer>
      <GamesFilterContainer>
        <GameFilter />
      </GamesFilterContainer>
    </GamesContainer>
  );
};

export default Games;
