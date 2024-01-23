import React from "react";
import { IGame } from "../@types";
import Button from "Shared/Button/Button";
import { GameItemContainer, GameItemImgContainer } from "./Game.style";

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
          {/* <img src={"right"} alt="right Icon" /> */}
          Play
        </Button>
      </div>
    </GameItemContainer>
  );
};

export default Game;
