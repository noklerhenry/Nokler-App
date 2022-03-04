import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";

export const Cards = () => {
  const games = useSelector((state) => state.games);
  return (
    <div>
      {games.map((g) => (
        <Card
          key={g.id}
          id={g.id}
          name={g.name}
          image={g.image}
          price={g.price}
        />
      ))}
    </div>
  );
};
