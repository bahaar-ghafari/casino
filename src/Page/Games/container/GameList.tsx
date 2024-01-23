import React, { useEffect, useState } from "react";
import { IGame } from "../@types";
import { getGames } from "Services/gameService";
import Game from "../Components/Game";

const GameList: React.FC = () => {
  const [games,setGames] = useState([]);

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
   console.log('%cGameList.tsx line:21 games', 'color: #007acc;', games);
  return (
    <div>
      <h3>Games</h3>
      {games.map((game: IGame) => (
        <Game key={game.code} {...game} />
      ))}
    </div>
  );
};

export default GameList;
