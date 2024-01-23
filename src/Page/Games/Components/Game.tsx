import React from "react";
import { IGame } from "../@types";
import Button from "Shared/Button/Button";

const Game: React.FC<IGame> = ({ name, description, icon }) => {
  return (
    <div>
      <div>
        <img src={icon} alt="Game Icon" width='150rem' />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button>
          <img src={"right"} alt="right Icon" />
          Play
        </Button>
      </div>
    </div>
  );
};

export default Game;
