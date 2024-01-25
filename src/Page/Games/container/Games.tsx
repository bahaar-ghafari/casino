import React from "react";
import GameList from "../Components/GameList";
import { GamesContainer } from "./Games.style";
import GameFilter from "../Components/GameFilter";

const Games: React.FC = () => {

  return (
    <GamesContainer>
      <GameList/>
      <GameFilter/>
    </GamesContainer>
  );
};

export default Games;
