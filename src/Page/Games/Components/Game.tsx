import React, { useState } from "react";
import { IGame } from "../@types";
import Button from "Shared/Button/Button";
import { GameItemContainer, GameItemImgContainer } from "./Game.style";
import ChevronIcon from "Shared/SVGs/ChevronIcon";
import { games } from "Constants/games";
import { findKeyByValue } from "Helpers/findKeyByValue";

const Game: React.FC<IGame> = ({ name, description, icon }) => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const launchGame = (name: string) => {
    setSelectedGame(findKeyByValue(name));
  };
  return (
    <GameItemContainer>
      <GameItemImgContainer>
        <img src={icon} alt="Game Icon" width="100%" />
      </GameItemImgContainer>
      <div>
        <b role="heading" aria-level={5}>
          {name}
        </b>
        <p>{description}</p>
        <Button onClick={() => launchGame(name)}>
          Play
          <ChevronIcon direction="right" />
        </Button>
        <div id="game-launch"></div>
      </div>
      {selectedGame && (
        <iframe
          title={`Game: ${selectedGame}`}
          src={games[selectedGame]?.src}
          frameBorder="0"
          width="640px"
          height="480px"
          scrolling="no"
        />
      )}
    </GameItemContainer>
  );
};

export default Game;
