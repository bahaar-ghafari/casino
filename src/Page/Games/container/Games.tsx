import React from "react";
import GameList from "../Components/GameList";
import { GamesContainer } from "./Games.style";
import GameFilter from "../Components/GameFilter";
import ScrollToTop from "Components/ScrollToTopButton/ScrollToTopButton";

const Games: React.FC = () => {
  return (
    <GamesContainer>
      <GameList />
      <GameFilter />
      <ScrollToTop />
    </GamesContainer>
  );
};

export default Games;
