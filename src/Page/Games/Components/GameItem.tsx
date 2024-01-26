import React from "react";
import { IGame } from "../@types";
import Button from "Shared/Button/Button";
import { GameItemContainer, GameItemImgContainer } from "./Game.style";
import ChevronIcon from "Shared/SVGs/ChevronIcon";
import { findKeyByValue } from "Helpers/findKeyByValue";
import useGamesStore from "stores/gamesStore";
import { useNavigate } from "react-router-dom";

const GameItem: React.FC<IGame> = ({ name, description, icon }) => {
  const { setSelectedGame } = useGamesStore();
  const navigate = useNavigate();

  const launchGame = (name: string) => {
    setSelectedGame(findKeyByValue(name));
    navigate("/game/:" + findKeyByValue(name));
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
    </GameItemContainer>
  );
};

export default GameItem;
