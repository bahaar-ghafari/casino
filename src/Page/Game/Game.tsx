// GameComponent.tsx

import { games } from "Constants/games";
import Button from "Shared/Button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import useGamesStore from "stores/gamesStore";

const GameComponent: React.FC = () => {
  const { selectedGame } = useGamesStore();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  console.log(
    "%cGame.tsx line:15 selectedGame",
    "color: #007acc;",
    selectedGame
  );
  console.log(
    "%cGame.tsx line:20 games[selectedGame]?.src",
    "color: #007acc;",
    games[selectedGame ?? ""]?.src
  );
  console.log("%cGame.tsx line:25 games", "color: #007acc;", games);
  if (!selectedGame) return null;
  return (
    <div>
      <Button onClick={handleBack}>Back</Button>
      <iframe
        title={`Game: ${selectedGame}`}
        src={games[selectedGame]?.src}
        frameBorder="0"
        width="640px"
        height="480px"
        scrolling="no"
      />
    </div>
  );
};

export default GameComponent;
