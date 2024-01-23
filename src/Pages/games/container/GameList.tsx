import React from "react";
import Game from "../components/game";
import { GameProps } from "../@types";

interface GameListProps {
  games: GameProps[];
}

const GameList: React.FC<GameListProps> = ({ games }) => {
  return (
    <div>
      <h1>Games</h1>
      <ul>
        {games.map((game) => (
          <Game key={game.id} {...game}/>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
