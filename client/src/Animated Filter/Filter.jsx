import React, { useEffect } from 'react';
import './FilterStyle.css';

const Filter = ({ games, filtered, setFiltered, activeButton, setActiveButton }) => {
  
    useEffect(() => {
        if(activeButton !== 0){
            const filter = games.filter(g => {
                return g.genres.find(el => el.id === activeButton)
            })
            setFiltered(filter)
            // console.log(filter)
        } else {
            setFiltered(games)
            // console.log(filtered)
        }
    }, [activeButton])
    
    return (
      <div className="filter-container">
        <button
          onClick={() => setActiveButton(0)}
          className={activeButton === 0 ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setActiveButton(4)}
          className={activeButton === 4 ? "active" : ""}
        >
          Action
        </button>
        <button
          onClick={() => setActiveButton(2)}
          className={activeButton === 2 ? "active" : ""}
        >
          Shooter
        </button>
        <button
          onClick={() => setActiveButton(3)}
          className={activeButton === 3 ? "active" : ""}
        >
          Adventure
        </button>
      </div>
    );
}

export default Filter