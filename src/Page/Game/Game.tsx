// GameComponent.tsx

import { games } from "Constants/games";
import Button from "Shared/Button/Button";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGamesStore from "stores/gamesStore";
import { GameContainer } from "./Game.style";

const GameComponent: React.FC = () => {
  const { selectedGame, setSelectedGame } = useGamesStore();
  const navigate = useNavigate();
  const { gameName } = useParams<{ gameName: string }>();
  console.log("%cGame.tsx line:14 gameName", "color: #007acc;", gameName);
  const handleBack = () => {
    navigate(-1);
  };
  if (!selectedGame && gameName) {
    setSelectedGame(gameName);
  }
  return (
    <GameContainer>
      <Button onClick={handleBack}>Back</Button>
      <iframe
        title={`Game: ${selectedGame}`}
        src={selectedGame ? games[selectedGame]?.src : gameName}
        frameBorder="0"
        width="640px"
        height="480px"
        scrolling="no"
      />
    </GameContainer>
  );
};

export default GameComponent;
