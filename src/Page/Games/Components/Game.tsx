import React from "react";
import { IGame } from "../@types";
import Button from "Shared/Button/Button";
import { GameItemContainer, GameItemImgContainer } from "./Game.style";
import ChevronIcon from "Shared/SVGs/ChevronIvon";

const Game: React.FC<IGame> = ({ name, description, icon }) => {
  return (
    <GameItemContainer>
      <GameItemImgContainer>
        <img src={icon} alt="Game Icon" width="150rem" />
      </GameItemImgContainer>
      <div>
        <div role="heading" aria-level={5}>
          {name}
        </div>
        <p>{description}</p>
        <Button>
          {/* onClick={() => comeon.game.launch(name)}*/}
          Play
          <ChevronIcon direction="right"/>
        </Button>
      </div>
    </GameItemContainer>
  );
};

export default Game;
