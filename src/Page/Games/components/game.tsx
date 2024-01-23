import React from 'react';
import styles from './Game.module.css'; // Import the CSS module
import { GameProps } from '../@types';

const Game: React.FC<GameProps> = ({ title, explanation, iconUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={iconUrl} alt="Game Icon" className={styles.icon} />
      </div>
      <div className={styles.right}>
        <h2>{title}</h2>
        <p>{explanation}</p>
        <button className={styles.playButton}>
        <img src={'right'} alt="right Icon" className={styles.icon} />
          Play
        </button>
      </div>
    </div>
  );
};

export default Game;
