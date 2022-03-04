import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './Game';
import { Container } from './GameStyle';
import Filter from './Filter';
import { AnimatePresence } from "framer-motion/dist/framer-motion";


const AnimatedFilter = () => {
  const [games, setGames] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeButton, setActiveButton] = useState(0)
  
  const getInfo = async () => {
    const api = await axios.get("https://api.rawg.io/api/games?key=d063d7ea72004c9a8f9461144dd91d96");
    const response = api.data.results;
    setGames(response);
    setFiltered(response);
  }
  
  useEffect(() => {
      getInfo();
  }, [])
  
  return (
    <>
      <Filter
        games={games}
        filtered={filtered}
        setFiltered={setFiltered}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <Container layout >
        <AnimatePresence>
          {filtered?.map((game, index) => {
            return <Game key={index} game={game} />;
          })}
        </AnimatePresence>
      </Container>
    </>
  );
}

export default AnimatedFilter