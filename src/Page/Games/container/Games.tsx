import React from "react";
import GameList from "../Components/GameList";
import { GamesContainer } from "./Games.style";
import GameFilter from "../../../Components/Filter/GameFilter";
import ScrollToTop from "Components/ScrollToTopButton/ScrollToTopButton";
import useIsMobile from "Hooks/useUsMobile";

const Games: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <GamesContainer>
      <GameList />
      {!isMobile && <GameFilter />}
      <ScrollToTop />
    </GamesContainer>
  );
};

export default Games;
