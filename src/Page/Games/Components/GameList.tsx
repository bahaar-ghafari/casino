import React, { useEffect } from "react";
import { IGame } from "../@types";
import Game from "./Game";
import useGamesStore from "stores/gamesStore";
import useSWR from "swr";
import { getGames } from "Services/gameService";
import { apiKeys } from "Constants/apiKeys";

const GameList: React.FC = () => {
  const { filterdGames } = useGamesStore();
  const { data } = useSWR<IGame[]>(apiKeys.games, getGames);
  const games = filterdGames.length > 0 ? filterdGames : data;
  return (
    <div>
      <div role="heading" aria-level={5}>
        Games
      </div>
      {games?.map((game: IGame) => (
        <Game key={game.code} {...game} />
      ))}
    </div>
  );
};

export default GameList;
