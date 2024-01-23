import React from "react";
import { IGame } from "../@types";
import Game from "./Game";
import { GameListContainer } from "./GameListContainer.style";

type GameListProps = {
  games: IGame[];
};
const GameList: React.FC<GameListProps> = ({ games }) => {
  return (
    <GameListContainer>
      {games.map((game: IGame) => (
        <Game key={game.code} {...game} />
      ))}
    </GameListContainer>
  );
};

export default GameList;
