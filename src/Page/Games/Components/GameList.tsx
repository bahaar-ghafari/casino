import React from "react";
import { IGame } from "../@types";
import Game from "./Game";

type GameListProps = {
  games: IGame[];
};
const GameList: React.FC<GameListProps> = ({ games }) => {
  return (
    <div>
      <div role="heading" aria-level={5}>
        Games
      </div>
      {games.map((game: IGame) => (
        <Game key={game.code} {...game} />
      ))}
    </div>
  );
};

export default GameList;
