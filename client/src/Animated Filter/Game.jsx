import React from 'react';
import { Title, Image, GameCont } from "./GameStyle";


const Game = ({ game }) => {
  return (
    <GameCont
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Title>{game.name}</Title>
      <Image src={game.background_image} alt="gameImage" />
    </GameCont>
  );
}

export default Game;