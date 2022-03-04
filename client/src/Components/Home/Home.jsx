import React from "react";
import Filter from "../Filter/Filter";
import Ordering from "../Ordering/Ordering";



export default function Home () {
    return (
        <div className="home">
            <div className="titles">
                <h1>Nøkler</h1>
                <h2>BUY AND SELL GAME KEYS</h2>
            </div>
            <div className="filter-order">
                <h4>Personalize your search</h4>
                    <Filter/>
                    <Ordering/>
            </div>
        </div>
    )
}